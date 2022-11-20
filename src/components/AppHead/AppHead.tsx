import Head from 'next/head';
import { AppDescription, AppDescriptionProps } from './AppDescription';
import { AppIcon, AppIconProps } from './AppIcon';
import { AppPWA } from './AppPWA';
import { AppTitle, AppTitleProps } from './AppTitle';

import favicon from './favicon/favicon.ico';
import favicon16 from './favicon/favicon-16x16.png';
import favicon32 from './favicon/favicon-32x32.png';
import apple180 from './favicon/apple-touch-icon.png';
import safariPinnedTab from './favicon/safari-pinned-tab.svg';

export interface AppHeadProps
  extends AppTitleProps,
    AppDescriptionProps,
    Partial<AppIconProps> {}

export const AppHead = ({ title, description }: AppHeadProps) => {
  const themeColor = '#f8b500';

  return (
    <Head>
      <AppTitle title={title} />
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
    </Head>
  );
};
