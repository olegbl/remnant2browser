import './styles.css';
import * as React from 'react';
import * as antd from 'antd';
import * as icons from '@ant-design/icons';
import { Entity } from './Types';
import data from './data';

const tags: Set<string> = new Set(
  data.reduce(
    (agg: string[], entity): string[] => [...agg, ...entity.tags],
    [],
  ),
);

const QUERY_REGEXP = new RegExp('".*?"|[^\\s]+', 'g');
const QUOTEED_TOKEN_REGEXP = new RegExp('^"(.*)"$');

function getURL(name: string): string {
  return `https://remnant2.wiki.fextralife.com/${name.replace(' ', '+')}`;
}

const List = React.memo(function List({ entities }: { entities: Entity[] }) {
  return (
    <>
      {entities.map((entity) => (
        <a
          key={entity.name}
          href={getURL(entity.name)}
          target="_blank"
          rel="noreferrer">
          <antd.Card hoverable={true} size="small" style={{ marginTop: 12 }}>
            <antd.Space>
              <antd.Avatar size={48} src={entity.iconURL} />
              <antd.Space direction="vertical" style={{ marginLeft: 12 }}>
                <antd.Typography style={{ fontWeight: 'bold' }}>
                  {entity.name}
                </antd.Typography>
                <antd.Typography>{entity.description}</antd.Typography>
                <antd.Space>
                  {entity.tags.map((tag) => (
                    <antd.Tag key={tag} color="processing">
                      {tag}
                    </antd.Tag>
                  ))}
                </antd.Space>
              </antd.Space>
            </antd.Space>
          </antd.Card>
        </a>
      ))}
    </>
  );
});

function Content() {
  // @ts-ignore
  const [isPending, startTransition] = React.useTransition();

  const [queryString, setQueryString] = React.useState(
    new URL(window.location.href).searchParams.get('q') ?? '',
  );
  const [query, setQuery] = React.useState(queryString);

  const queryTokens = React.useMemo(
    () =>
      (query.toLowerCase().match(QUERY_REGEXP) ?? []).map((token) =>
        token.replace(QUOTEED_TOKEN_REGEXP, '$1'),
      ),
    [query],
  );

  const suggestions = React.useMemo(() => {
    const partialQuery = query.replace(/^.*\s+/, '').toLowerCase();
    if (partialQuery === '') {
      return [];
    }
    return Array.from(tags)
      .filter(
        (tag) =>
          tag.toLowerCase().includes(partialQuery) &&
          tag.toLowerCase() !== partialQuery,
      )
      .map((tag) => ({
        label: tag,
        value:
          query.replace(/^(.*\s+)?.*?$/, '$1') +
          (tag.includes(' ') ? `"${tag}"` : tag),
      }));
  }, [query]);

  const filteredEntities = React.useMemo(
    () =>
      data.filter(
        (entity) =>
          queryTokens.length === 0 ||
          // every query token must match something
          queryTokens.every(
            (token) =>
              // the token can be a part of the name
              entity.name.toLowerCase().includes(token) ||
              // the token can be a part of the description
              entity.description.toLowerCase().includes(token) ||
              // the token can equal one of the tags
              entity.tags.map((tag) => tag.toLowerCase()).includes(token),
          ),
      ),
    [queryTokens],
  );

  return (
    <React.Suspense fallback={null}>
      <antd.Layout style={{ minHeight: '100%' }}>
        <antd.Layout.Content style={{ padding: 12 }}>
          <antd.AutoComplete
            options={suggestions}
            style={{ width: '100%' }}
            value={queryString}
            onChange={(value: string): void => {
              // update the URL
              const url = new URL(window.location.href);
              url.searchParams.set('q', value);
              window.history.replaceState({}, '', url.toString());
              // update the search input
              setQueryString(value);
              // update the rest of the view (e.g. list)
              startTransition(() => {
                setQuery(value);
              });
            }}>
            <antd.Input
              addonBefore={
                // @ts-ignore
                <icons.SearchOutlined />
              }
              addonAfter={
                isPending ? 'Loading...' : `${filteredEntities.length} Results`
              }
              allowClear={true}
              placeholder="Search for names, descriptions, or tags..."
              size="large"
            />
          </antd.AutoComplete>
          <React.Suspense fallback={null}>
            <List entities={filteredEntities} />
          </React.Suspense>
        </antd.Layout.Content>
      </antd.Layout>
    </React.Suspense>
  );
}

export default function App() {
  return (
    <antd.ConfigProvider
      theme={{
        // match app theme to OS theme
        algorithm: window.matchMedia('(prefers-color-scheme: dark)').matches
          ? antd.theme.darkAlgorithm
          : antd.theme.defaultAlgorithm,
      }}>
      <Content />
    </antd.ConfigProvider>
  );
}
