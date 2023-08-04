const fs = require('fs');
const vm = require('vm');
const puppeteer = require('puppeteer-extra');
const stealthPlugin = require('puppeteer-extra-plugin-stealth');
const { JSDOM } = require('jsdom');

const dom = new JSDOM();
const parser = new dom.window.DOMParser();

puppeteer.use(stealthPlugin());

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';

async function downloadPage(browserPage, page) {
  try {
    console.log(`downloading page ${page.url}`);
    await browserPage.goto(page.url, { waitUntil: 'domcontentloaded' });
    await browserPage.waitForSelector('.container-fluid', {
      timeout: 5000,
    });
    const html = await browserPage.evaluate(
      () => document.documentElement.outerHTML,
    );
    return { ...page, html };
  } catch (error) {
    console.error(`error while downloading the page ${page.url}`, error);
  }
}

function getUnique(arr) {
  return Array.from(new Set(arr.filter(Boolean))).sort();
}

function getCellText(tr, cellIndex) {
  const td = tr.querySelector(`td:nth-child(${cellIndex})`);
  if (td != null) {
    return td.textContent;
  }
  return '';
}

function fixWikiURL(url) {
  return 'https://remnant2.wiki.fextralife.com' + url;
}

async function getImgURL(browserPage, tr) {
  try {
    const img = tr.querySelector('img');
    if (img == null) {
      return '';
    }
    const imgURL = fixWikiURL(img.src);

    console.log(`downloading image ${imgURL}`);
    const imgData = await browserPage.goto(imgURL, { encoding: 'binary' });
    const mimeType = imgData.headers()['content-type'];
    const buffer = await imgData.buffer();
    const bufferStr = buffer.toString('base64');
    const dataURI = `data:${mimeType};base64,${bufferStr}`;
    return dataURI;
  } catch (error) {
    console.error('error fetching image', error);
    return '';
  }
}

const KEYWORDS = [
  // locations
  ['Labyrinth'],
  ['Losomn'],
  ['Root Earth'],
  ['Ward 13'],
  ['Yaesha'],
  ["N'Erud"],
  // NPCs
  ['Cass'],
  ['Drzyr Replicator'],
  ['Mudtooth'],
  ['Nimue'],
  ['Reggie'],
  ["Nightweaver's Web."],
  // mechanics
  ['Experience'],
  ['Health'],
  ['HP', 'Health'],
  ['Lifesteal'],
  ['Stamina'],
  ['Incoming Damage', 'DR'],
  ['Incoming Enemy Damage', 'DR'],
  ['Bulwark', 'DR'],
];

function getKeywords(text) {
  if (text == null) {
    console.warn('got empty text when trying to parse keywords');
    return [];
  }
  return KEYWORDS.filter(([value, tag]) =>
    text.toLowerCase().includes(value.toLowerCase()),
  ).map(([value, tag]) => tag ?? value);
}

async function parsePage(browserPage, page, oldEntities) {
  console.log(`parsing page ${page.url}`);

  // grab and parse the page
  const doc = parser.parseFromString(page.html, 'text/html');

  // find all the table rows
  const trs = [];
  doc.querySelectorAll('.wiki_table tr').forEach((tr) => {
    trs.push(tr);
  });

  // parse each table row
  const entities = [];
  for (let tr of trs) {
    if (tr != null) {
      const a = tr.querySelector('.wiki_link');
      if (a != null) {
        const name = a.title.replace(/^Remnant 2 /, '');
        console.log(`parsing entity ${name}`);
        entities.push({
          name,
          description: page.getDescription?.(tr) ?? '',
          iconURL:
            oldEntities[name]?.iconURL ?? (await getImgURL(browserPage, tr)),
          linkURL: fixWikiURL(a.href),
          tags: getUnique(page.getTags?.(tr) ?? []),
        });
      }
    }
  }
  return entities;
}

async function writeFile(filename, content) {
  fs.writeFileSync(filename, content, 'utf8');
}

async function scrapeData(pages) {
  const oldDataTs = fs.readFileSync('./src/data.tsx', {
    encoding: 'utf8',
  });
  const oldDataJs = oldDataTs
    .replace(/\n/gm, '')
    .replace(/^.*const data: Entity\[\] = /, 'var data = ')
    .replace(/export default data;/, 'module.exports = data;')
    .trim();
  const context = { module: { exports: {} } };
  vm.runInNewContext(oldDataJs, context);
  const oldData = context.module.exports;
  const oldEntities = oldData.reduce(
    (agg, entity) => ({ ...agg, [entity.name]: entity }),
    {},
  );

  // using headless doesna't work, thanks CloudFlare
  // const browser = await puppeteer.launch({ headless: false });
  // instead, run Chrome with --remote-debugging-port=9222
  const browser = await puppeteer.connect({
    browserURL: 'http://localhost:9222',
    defaultViewport: null,
  });

  const browserPage = await browser.newPage();
  await browserPage.setUserAgent(USER_AGENT);
  await browserPage.setViewport({ width: 1366, height: 768 });

  const downloadedPages = [];
  for (let page of pages) {
    downloadedPages.push(await downloadPage(browserPage, page));
  }

  const parsedPages = [];
  for (let page of downloadedPages) {
    parsedPages.push(await parsePage(browserPage, page, oldEntities));
  }

  const entities = parsedPages
    .reduce((agg, page) => [...agg, ...page], [])
    .sort((a, b) => a.name.localeCompare(b.name));

  writeFile(
    './src/data.tsx',
    `import {Entity} from './Types';\n\nconst data: Entity[] = ${JSON.stringify(
      entities,
    )};\n\nexport default data;\n`,
  );

  await browserPage.close();
  // await browser.close();
  await browser.disconnect();
}

scrapeData([
  {
    url: 'https://remnant2.wiki.fextralife.com/Amulets',
    getDescription: (tr) => getCellText(tr, 2),
    getTags: (tr) => [
      'Amulet',
      ...getKeywords(getCellText(tr, 2)),
      ...getKeywords(getCellText(tr, 3)),
    ],
  },
  {
    url: 'https://remnant2.wiki.fextralife.com/Rings',
    getDescription: (tr) => getCellText(tr, 2),
    getTags: (tr) => [
      'Ring',
      ...getKeywords(getCellText(tr, 2)),
      ...getKeywords(getCellText(tr, 3)),
    ],
  },
  {
    url: 'https://remnant2.wiki.fextralife.com/Relics',
    getDescription: (tr) => getCellText(tr, 2),
    getTags: (tr) => [
      'Relic',
      ...getKeywords(getCellText(tr, 2)),
      ...getKeywords(getCellText(tr, 3)),
    ],
  },
  {
    url: 'https://remnant2.wiki.fextralife.com/Mutators',
    getDescription: (tr) =>
      [getCellText(tr, 3), getCellText(tr, 4)].filter(Boolean).join(' '),
    getTags: (tr) => [
      'Mutator',
      ...getKeywords(getCellText(tr, 3)),
      ...getKeywords(getCellText(tr, 4)),
    ],
  },
  {
    url: 'https://remnant2.wiki.fextralife.com/Perks',
    getDescription: (tr) => getCellText(tr, 4),
    getTags: (tr) => [
      'Perk',
      getCellText(tr, 2).replace(' Perk', ''),
      getCellText(tr, 3),
    ],
  },
  {
    url: 'https://remnant2.wiki.fextralife.com/Traits',
    getDescription: (tr) => getCellText(tr, 4) + ' (at Max Level)',
    getTags: (tr) => ['Trait', ...getKeywords(getCellText(tr, 4))],
  },
  {
    url: 'https://remnant2.wiki.fextralife.com/Weapon+Mods',
    getDescription: (tr) => getCellText(tr, 2),
    getTags: (tr) => ['Mod', ...getKeywords(getCellText(tr, 2))],
  },
]);
