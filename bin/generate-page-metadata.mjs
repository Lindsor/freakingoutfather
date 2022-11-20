import { promises as fs } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { URL } from 'node:url';
import { glob } from './glob.mjs';
import prettier from 'prettier';
import prettierrc from '../.prettierrc.js';

const __dirname = new URL('.', import.meta.url).pathname;
const pagesRoot = resolve(__dirname, '..', 'src', 'pages');
const pagesGlob = resolve(__dirname, '..', 'src', 'pages', '**', '*.page.tsx');
const publicDirectory = resolve(__dirname, '..', 'public');

const pageFiles = await glob(pagesGlob);

const getPageMetaDataContent = ({ createdAt, modifiedAt }) =>
  prettier.format(
    `
      interface IPageMetaData {
        createdAt: string;
        modifiedAt: string;
      }

      export const PageMetaData: IPageMetaData = {
        createdAt: '${createdAt}',
        modifiedAt: '${modifiedAt}',
      };
    `,
    prettierrc,
  );

const getSitemapContent = (pageMetaDatas) => {
  const urls = pageMetaDatas.map((pageMetaData) => {

    const pagePath = pageMetaData.pagePublicPath || '/';

    return `
      <url>
        <loc>${process.env.NEXT_PUBLIC_SITE_URL}${pagePath}</loc>
        <lastmod>${pageMetaData.modifiedAt}</lastmod>
      </url>
    `.trim();
  });

  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
    </urlset>
  `.trim();
};

const fileMetaDatas = await Promise.all(
  pageFiles.map(async (pagePath) => {
    const pageRootDirectory = dirname(pagePath);
    const pageMetaFilePath = resolve(pageRootDirectory, '_PageMetaData.ts');
    const pagePublicPath = pageRootDirectory.replace(pagesRoot, '');

    let { birthtime: createdAt, mtime: modifiedAt } = await fs.stat(pagePath);
    createdAt = createdAt.toISOString();
    modifiedAt = modifiedAt.toISOString();

    await fs.writeFile(
      pageMetaFilePath,
      getPageMetaDataContent({ createdAt, modifiedAt }),
      'utf-8',
    );

    return { pagePublicPath, pageMetaFilePath, createdAt, modifiedAt };
  }),
);

fileMetaDatas.sort((page1, page2) => {
  const publicPath1 = page1.pagePublicPath;
  const publicPath2 = page2.pagePublicPath;

  if (publicPath1 === publicPath2) return 0;
  if (publicPath1 < publicPath2) return -1;
  return 1;
});

await fs.writeFile(
  resolve(publicDirectory, 'sitemap.xml'),
  getSitemapContent(fileMetaDatas),
  'utf-8',
);

console.log(fileMetaDatas);
