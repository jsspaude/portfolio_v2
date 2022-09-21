import styles from './Hero.module.scss';
import Skyline from '../SVG/Skyline/Skyline';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.intro} ${styles.subsection}`}>
        <div className={styles.image}>
          <img src="/assets/images/headshot.png" />
        </div>
        <div className={styles.text}>
          <h3>Welcome,</h3>
          <p>
            I’m Jess, a{' '}
            <span className={styles.highlight}>full stack web developer</span>.
          </p>
        </div>
      </div>

      <div className={`${styles.experience} ${styles.subsection}`}>
        <p>I have experience with:</p>
        <p>
          • Next.js • React.js • Wordpress • PHP • MySql • Cloud Computing •
          Digital Ocean • DevOps
        </p>

        <a href="#">and more +</a>
      </div>

      <div className={`${styles.location} ${styles.subsection}`}>
        <p>
          I live in <span>Vancouver</span> &rarr;
        </p>
        <div className={`${styles.location__image}`}>
          <Skyline />
        </div>
      </div>

      <div className={`${styles.icons} ${styles.subsection}`}>
        <div className={styles.icons__text}>
          <p>
            You can contact me &rarr; <a href="#">here</a>.
          </p>
          <p>or there &darr; </p>
        </div>

        <div className={styles.icons__container}>
          <img src="/assets/svg/email.svg" alt="An SVG of an @ symbol" />
          <img
            src="/assets/svg/linkedin.svg"
            alt="An SVG of the linkedin symbol"
          />
          <img src="/assets/svg/github.svg" alt="An SVG of the github symbol" />
        </div>
      </div>

      <div className={`${styles.scroll} ${styles.subsection}`}>
        <div className={styles.scroll__container}>
          <p>Scroll for more</p>
        </div>
      </div>
    </section>
  );
}
