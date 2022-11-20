export interface AppTitleProps {
  title?: string;
  rootTitle: string;
}

export const AppTitle = ({ title, rootTitle }: AppTitleProps) => {
  const titleParts = [];
  if (title) {
    titleParts.push(title);
  }
  titleParts.push(rootTitle);

  const pageTitle = titleParts.filter(Boolean).join(' | ');

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="apple-mobile-web-app-title" content={rootTitle} />
      <meta name="application-name" content={rootTitle} />
    </>
  );
};
