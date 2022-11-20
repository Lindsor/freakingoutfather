import { PostData as StartsWithJokeData } from './it-all-starts-with-a-joke';

export interface BlogPostData {
  href: string;
  title: string;
}

const blogTitleToSlug = (title: string): string =>
  title?.toLowerCase().replace(/[\s\:]+/g, '-');

const blogTitleToHref = (title: string): string =>
  `/blog/${blogTitleToSlug(title)}`;

const postDataToPartialData = (PostData: {
  title: string;
  slug: string;
}): BlogPostData => ({
  href: blogTitleToHref(PostData.slug || PostData.title),
  title: PostData.title,
});

export const postsData: BlogPostData[] = [postDataToPartialData(StartsWithJokeData)];
