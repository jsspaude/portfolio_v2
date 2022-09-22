import styles from './Footer.module.scss';
import LinkedIn from '../SVG/LinkedIn/LinkedIn';
import GitHub from '../SVG/GitHub/GitHub';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>Contact</h3>
      <div className={styles.footer__container}>
        <div className={styles.footer__contact}>
          <ul className={styles.footer__contact__container}>
            <li>
              <ul className={styles.footer__contact__social}>
                <li>
                  <LinkedIn />
                </li>
                <li>
                  <GitHub />
                </li>
              </ul>
            </li>
            <li>
              <div className={styles.email}>
                <a href="mailto:jsspaude@gmail.com">jsspaude@gmail</a>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.footer__copyright}>
          <p>
            Copyright © <a href="https://jspaude.ca">jspaude.ca</a> 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
