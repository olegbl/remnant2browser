import * as React from 'react';
import * as antd from 'antd';
import './styles.css';
import data, { Entity } from './data';

function getUnique(arr: string[]): string[] {
  return Array.from(new Set(arr.filter(Boolean))).sort();
}

function getID(name: string): string {
  return name.toLowerCase();
}

function fixWikiURL(url: string): string {
  return url.replace(
    /^https:\/\/.*?.app\//,
    'https://remnant2.wiki.fextralife.com/',
  );
}

function getCellText(tr: HTMLTableRowElement, cellIndex: number): string {
  const td = tr.querySelector(`td:nth-child(${cellIndex})`);
  if (td instanceof HTMLTableCellElement) {
    return td.innerText;
  }
  return '';
}

function getImgURL(tr: HTMLTableRowElement): string {
  const img = tr.querySelector('img');
  if (img instanceof HTMLImageElement) {
    return fixWikiURL(img.src);
  }
  return '';
}

const KEYWORDS = [
  // locations
  'Labyrinth',
  'Losomn',
  'Root Earth',
  'Ward 13',
  'Yaesha',
  "N'Erud",
  // NPCs
  'Cass',
  'Drzyr Replicator',
  'Mudtooth',
  'Nimue',
  'Reggie',
  "Nightweaver's Web.",
];

function getKeywords(text: string): string[] {
  return KEYWORDS.filter((keyword) =>
    text.toLowerCase().includes(keyword.toLowerCase()),
  );
}

const oldEntities = data.reduce(
  (agg, entity) => ({ ...agg, [getID(entity.name)]: entity }),
  {} as { [id: string]: Entity },
);

export default function Scraper() {
  const [newData, setNewData] = React.useState<Entity[]>([]);

  function scrapePage(
    url: string,
    options: {
      getDescription?: (tr: HTMLTableRowElement) => string;
      getTags?: (tr: HTMLTableRowElement) => string[];
    },
  ): Promise<{ [id: string]: Entity }> {
    return fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const newEntities: { [id: string]: Entity } = {};
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        doc.querySelectorAll('.wiki_table tr').forEach((tr) => {
          if (tr instanceof HTMLTableRowElement) {
            const a = tr.querySelector('.wiki_link');
            if (a instanceof HTMLAnchorElement) {
              const name = a.title.replace(/^Remnant 2 /, '');
              newEntities[getID(name)] = {
                name,
                description: options.getDescription?.(tr) ?? '',
                iconURL: getImgURL(tr),
                linkURL: fixWikiURL(a.href),
                tags: getUnique(options.getTags?.(tr) ?? []),
              };
            }
          }
        });
        return newEntities;
      });
  }

  Promise.all([
    scrapePage('https://remnant2.wiki.fextralife.com/Amulets', {
      getDescription: (tr) => getCellText(tr, 2),
      getTags: (tr) => ['Amulet', ...getKeywords(getCellText(tr, 3))],
    }),
    scrapePage('https://remnant2.wiki.fextralife.com/Rings', {
      getDescription: (tr) => getCellText(tr, 2),
      getTags: (tr) => ['Ring', ...getKeywords(getCellText(tr, 3))],
    }),
    scrapePage('https://remnant2.wiki.fextralife.com/Relics', {
      getDescription: (tr) => getCellText(tr, 2),
      getTags: (tr) => ['Relic', ...getKeywords(getCellText(tr, 3))],
    }),
    scrapePage('https://remnant2.wiki.fextralife.com/Mutators', {
      getDescription: (tr) =>
        [getCellText(tr, 3), getCellText(tr, 4)].filter(Boolean).join(' '),
      getTags: (tr) => [
        'Mutator',
        ...getKeywords(getCellText(tr, 3)),
        ...getKeywords(getCellText(tr, 4)),
      ],
    }),
    scrapePage('https://remnant2.wiki.fextralife.com/Perks', {
      getDescription: (tr) => getCellText(tr, 4),
      getTags: (tr) => [
        'Perk',
        getCellText(tr, 2).replace(' Perk', ''),
        getCellText(tr, 3),
      ],
    }),
    scrapePage('https://remnant2.wiki.fextralife.com/Traits', {
      getDescription: (tr) => getCellText(tr, 4),
      getTags: (tr) => ['Trait'],
    }),
  ]).then((values) => {
    const newEntities = values.reduce(
      (agg, entities) => ({ ...agg, ...entities }),
      {},
    );

    Object.values(oldEntities).forEach((entity) => {
      const id = getID(entity.name);
      if (newEntities[id] == null) {
        console.warn(`Could not find data for "${entity.name}".`);
        return;
      }
    });

    Object.values(newEntities).forEach((entity) => {
      const id = getID(entity.name);
      if (oldEntities[id] == null) {
        console.warn(`Found previously unseen "${entity.name}".`);
        return;
      }
    });

    setNewData(
      Object.values(newEntities)
        .map((newEntity) => {
          const id = newEntity.name.toLowerCase();
          const oldEntity = oldEntities[id];
          return {
            ...oldEntity,
            ...newEntity,
            tags: getUnique([...newEntity.tags, ...(oldEntity?.tags ?? [])]),
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name)),
    );
  });

  return (
    <antd.Layout style={{ minHeight: '100%' }}>
      <antd.Layout.Content style={{ padding: 12 }}>
        {JSON.stringify(newData)}
      </antd.Layout.Content>
    </antd.Layout>
  );
}
