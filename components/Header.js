import styles from '../styles/Header.module.scss';
import Skyline from './SVG/Skyline';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <h2>jesspaude.ca</h2>
        <div className={styles.subhead}>
          <p>Full Stack</p>
          <p>Web Development</p>
        </div>
      </div>
    </header>
  );
}
