import styles from './Hero.module.scss';
import Skyline from '../SVG/Skyline/Skyline';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.intro} ${styles.subsection}`}>
        <div className={styles.text}>
          <h3>Welcome,</h3>
          <p>I’m Jess, a full stack web developer.</p>
        </div>
      </div>

      <div className={`${styles.experience} ${styles.subsection}`}>
        <p>I have experience with:</p>
        <p>
          • Next.js • React • Wordpress • PHP • MySql • Cloud Computing •
          Digital Ocean • DevOps
        </p>

        <a href="#experience">+ more</a>
      </div>

      <div className={`${styles.icons} ${styles.subsection}`}>
        <div className={styles.icons__container}>
          <a href="mailto:jsspaude@gmail.com" target="_blank">
            <img src="/assets/svg/email.svg" alt="An SVG of an @ symbol" />
          </a>
          <a href="https://www.linkedin.com/in/jess-spaude/" target="_blank">
            <img
              src="/assets/svg/linkedin.svg"
              alt="An SVG of the linkedin symbol"
            />
          </a>
          <a href="https://github.com/jsspaude" target="_blank">
            <img
              src="/assets/svg/github.svg"
              alt="An SVG of the github symbol"
            />
          </a>
          <div className={`${styles.icons__image}`}>
            <Skyline />
          </div>
        </div>
      </div>

      <div className={`${styles.scroll} ${styles.subsection}`}>
        <div className={styles.scroll__container}></div>
      </div>
    </section>
  );
}
