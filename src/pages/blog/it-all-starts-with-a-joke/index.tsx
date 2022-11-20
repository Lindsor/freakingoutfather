import { AppHead } from '../../../components/AppHead/AppHead';
import styles from './StartsWithJoke.module.scss';

export const PostData = {
  title: 'Day 0: It All Starts With a Joke',
  slug: 'it-all-starts-with-a-joke',
};

export default function StartsWithJoke() {
  return (
    <>
      <AppHead title={PostData.title} />

      <main className={styles.main}>
        <h1 className={styles.title}>{PostData.title}</h1>

        <section>
          <h2>The Discovery</h2>
          <p>
            It all started, as it usually does, with a joke. I always saw a
            video pop up every once in a while on social media of different
            &quot;creative&quot; ways women tell their spouses.
          </p>
          <p>
            My joke of a telling was pretty mild compared to some out there. My
            fiance placed the positive pregnancy test on top of our coffee. We
            keep it in a high-up cupboard so you could not see it from just
            opening.
          </p>
          <p>
            She asked me to make coffee, and in my natural just woke-up state, I
            begrudgingly accepted and started the process. As soon as I opened
            the cupboard and took down the coffee tin this weird stick fell on
            the kitchen counter.
          </p>
          <p>
            Without even glancing at it I continued on my journey to blissful
            caffeine. I then glance to my left and notice she has stood still
            smiling at me the entire time and my brain seems to finally catch up
            with what just happened.
          </p>
          <p>
            After glancing down at the weird stick my mind had ignored I notice
            2 very clear lines on it. All of a sudden everything slams into my
            brain at once, the sudden realization.
          </p>
        </section>

        <section>
          <h2>The Realization</h2>

          <p>
            Everything falls into place at the same time and I turn to see her
            with an even bigger smile on her face.
          </p>
          <p>
            All of a sudden a grand sense of euphoria hits, true happiness
            between me and my fiance like I have never experienced. We always
            planned on having our first child when I turned 32, I am currently
            31, so we have been trying lightly but it was still one of the
            happiest days of my life.
          </p>
        </section>

        <blockquote>Not quite Freaking Out Father yet</blockquote>
      </main>
    </>
  );
}
