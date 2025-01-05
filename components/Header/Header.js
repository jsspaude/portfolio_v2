import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <h2>jspaude.ca</h2>
        <p>Full Stack Web Services</p>
      </div>
    </header>
  );
}
