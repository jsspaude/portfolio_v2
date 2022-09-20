import styles from '../styles/Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <i className="bi bi-briefcase"></i>
          <div>
            <div className={styles.college}>
              <a
                href="https://colonydigital.ca/"
                target="_blank"
                rel="noreferrer"
              >
                Colony Digital
              </a>
            </div>
            <div className={styles.branch}>Full Stack Web Developer</div>
          </div>
        </div>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <i className="bi bi-briefcase"></i>
          <div>
            <div className={styles.college}>
              <a
                href="https://vancouverwebsites.ca/"
                target="_blank"
                rel="noreferrer"
              >
                Vancouver Websites
              </a>
            </div>
            <div className={styles.branch}>Web Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
