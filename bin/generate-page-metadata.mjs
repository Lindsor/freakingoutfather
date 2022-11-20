import { promises as fs } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { URL } from 'node:url';
import { glob } from './glob.mjs';
import prettier from 'prettier';
import prettierrc from '../.prettierrc.js';

const __dirname = new URL('.', import.meta.url).pathname;
const pagesGlob = resolve(__dirname, '..', 'src', 'pages', '**', '*.page.tsx');
const publicDirectory = resolve(__dirname, '..', 'src', 'public');

const pageFiles = await glob(pagesGlob);

const getPageMetaDataContent = ({ createdAt, modifiedAt }) =>
  prettier.format(
    `
      interface IPageMetaData {
        createdAt: string;
        modifiedAt: string;
      }

      export const PageMetaData: IPageMetaData = {
        createdAt: '${createdAt.toISOString()}',
        modifiedAt: '${modifiedAt.toISOString()}',
      };
    `,
    prettierrc,
  );

const fileMetaDatas = await Promise.all(
  pageFiles.map(async (pagePath) => {
    const pageRootDirectory = dirname(pagePath);
    const pageMetaFilePath = resolve(pageRootDirectory, '_PageMetaData.ts');

    const { birthtime: createdAt, mtime: modifiedAt } = await fs.stat(pagePath);

    await fs.writeFile(
      pageMetaFilePath,
      getPageMetaDataContent({ createdAt, modifiedAt }),
      'utf-8',
    );

    return { pageMetaFilePath, createdAt, modifiedAt };
  }),
);

console.log(fileMetaDatas);
