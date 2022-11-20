const isDev = process.env.NEXT_PUBLIC_ENV === 'dev';

export const Env = {
  isDev: isDev,
  isProd: !isDev,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
};
