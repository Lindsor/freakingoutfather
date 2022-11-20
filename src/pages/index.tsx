import { Image } from '@nextui-org/react';
import styles from './Home.module.scss';
import { AppHead, rootTitle } from '../components/AppHead/AppHead';
import heroImage from '../images/freaking-out-father-hero.png';
import { BlogPostData, postsData } from './blog/posts.data';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <AppHead />

      <header>
        <Image
          className={styles.heroImage}
          src={heroImage.src}
          alt={rootTitle}
        />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>My Journey Through Fatherhood</h1>
        <article className={styles.blogPostsSection}>
          <h2>Journey</h2>
          <ol>
            {postsData?.map((postData: BlogPostData, index: number) => (
              <li key={`blog-${postData.href}`}>
                <Link
                  data-number={index + 1}
                  className={styles.blogPostLink}
                  href={postData.href}
                >
                  {postData.title}
                </Link>
              </li>
            ))}
            <li></li>
          </ol>
        </article>
      </main>
    </>
  );
}
