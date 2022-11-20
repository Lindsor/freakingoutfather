import { StaticImageData } from 'next/image';
import { Env } from '../../env';

export interface AppPageMicrodataProps {
  type?: 'BlogPosting';
  description?: string;
  image?: string;
  authorName: string;
  siteUrl: string;
  pageUrl: string;
  siteLogo: StaticImageData;
  createdAt: string;
  modifiedAt: string;
}

export const AppPageMicrodata = ({
  type,
  description,
  image,
  authorName,
  siteUrl,
  pageUrl,
  siteLogo,
  createdAt,
  modifiedAt,
}: AppPageMicrodataProps) => {
  const microData = {
    '@context': 'https://schema.org',
    '@type': type,
    headline: description,
    image: image,
    publisher: {
      '@type': 'Organization',
      name: authorName,
      url: siteUrl,
      logo: siteLogo
        ? {
            '@type': 'ImageObject',
            url: `${siteUrl}${siteLogo.src}`,
            width: siteLogo.width,
            height: siteLogo.height,
          }
        : undefined,
    },
    url: pageUrl,
    datePublished: modifiedAt,
    dateCreated: createdAt,
    dateModified: modifiedAt,
    description,
    author: authorName
      ? {
          '@type': 'Person',
          name: authorName,
          url: siteUrl,
        }
      : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  };

  return (
    <>
      <link rel="canonical" href={pageUrl} />
      {authorName ? <meta name="author" content={authorName} /> : null}
      {authorName ? <meta name="copyright" content={authorName} /> : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            microData,
            undefined,
            Env.isDev ? 2 : undefined,
          ),
        }}
      ></script>
    </>
  );
};
