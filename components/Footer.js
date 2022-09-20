import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="social-accounts">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href="mailto:jsspaude@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <img src="/assets/svg/email.svg" alt="An SVG of an @ symbol" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <img
                  src="/assets/svg/linkedin.svg"
                  alt="An SVG of the linkedin symbol"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.github.com/techomoro"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <img
                  src="/assets/svg/github.svg"
                  alt="An SVG of the github symbol"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p className="bottom">
            Copyright © <a href="https://jesspaude.ca">jesspaude.ca</a> 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
