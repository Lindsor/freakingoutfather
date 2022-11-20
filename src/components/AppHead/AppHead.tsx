import Head from 'next/head';
import { AppDescription, AppDescriptionProps } from './AppDescription';
import { AppIcon, AppIconProps } from './AppIcon';
import { AppPWA, AppPWAProps } from './AppPWA';
import { AppTitle, AppTitleProps } from './AppTitle';

import { Env } from '../../env';

import favicon from './favicon/favicon.ico';
import favicon16 from './favicon/favicon-16x16.png';
import favicon32 from './favicon/favicon-32x32.png';
import apple180 from './favicon/apple-touch-icon.png';
import safariPinnedTab from './favicon/safari-pinned-tab.svg';
import { themeColor } from '../AppTheme/AppTheme';
import { AppPageMicrodata } from './AppPageMicrodata';
import logoTransparent from '../../images/logo-transparent.png';
import { IPageMetaData } from '../../IPageMetaData';

export const rootTitle = 'Freaking Out Father';

export type AppHeadProps = Partial<AppTitleProps> &
  AppDescriptionProps &
  Partial<AppIconProps> &
  Partial<AppPWAProps> &
  Omit<IPageMetaData, 'pagePath'>;

export const AppHead = ({
  title,
  description,
  createdAt,
  modifiedAt,
  pageUrl,
}: AppHeadProps) => {
  return (
    <Head>
      <AppTitle title={title} rootTitle={rootTitle} />
      <AppDescription description={description} />
      <AppIcon
        icons={[
          {
            rel: 'icon',
            href: favicon.src,
          },
          {
            rel: 'apple-touch-icon',
            href: apple180.src,
            sizes: `${apple180.height}x${apple180.width}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            href: favicon32.src,
            sizes: `${favicon32.height}x${favicon32.width}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            href: favicon16.src,
            sizes: `${favicon16.height}x${favicon16.width}`,
          },
          {
            rel: 'mask-icon',
            href: safariPinnedTab.src,
            color: themeColor,
          },
        ]}
      />
      <AppPWA themeColor={themeColor} />
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href="/public/sitemap.xml"
      />
      <AppPageMicrodata
        type="BlogPosting"
        description={description}
        image={undefined}
        authorName={rootTitle}
        siteUrl={Env.siteUrl || ''}
        pageUrl={pageUrl}
        siteLogo={logoTransparent}
        createdAt={createdAt}
        modifiedAt={modifiedAt}
      />
    </Head>
  );
};
