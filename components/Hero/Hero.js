import styles from './Hero.module.scss';
import Skyline from '../SVG/Skyline/Skyline';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.main_container}>
        <div className={`${styles.intro} ${styles.subsection}`}>
          <div className={styles.text}>
            <h3>jspaude web development</h3>
            <p>Vanocuver based frontend, backend, and hosting needs</p>
          </div>
        </div>

        <div className={`${styles.experience} ${styles.subsection}`}>
          <p>Contact for help with:</p>
          <p>• SEO • Wordpress • Custom Builds (PHP, React)</p>
          <p>• Headless CMS • Cloud Computing • DevOps</p>
          <p>• Automation • Documentation • Optimization</p>

          <a href="#experience">+ more</a>
        </div>

        <div className={`${styles.icons} ${styles.subsection}`}>
          <div className={styles.icons__container}>
            <a href="mailto:jsspaude@gmail.com" target="_blank">
              <Image
                src="/assets/svg/email.svg"
                width="50px"
                height="50px"
                alt="An SVG of an @ symbol"
              />
            </a>
            <a href="https://www.linkedin.com/in/jess-spaude/" target="_blank">
              <Image
                width="50px"
                height="50px"
                src="/assets/svg/linkedin.svg"
                alt="An SVG of the linkedin symbol"
              />
            </a>
            <a href="https://github.com/jsspaude" target="_blank">
              <Image
                width="50px"
                height="50px"
                src="/assets/svg/github.svg"
                alt="An SVG of the github symbol"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.image}`}>
        <Skyline />
      </div>
      <div className={`${styles.scroll} ${styles.subsection}`}>
        <div className={styles.scroll__container}></div>
      </div>
    </section>
  );
}
