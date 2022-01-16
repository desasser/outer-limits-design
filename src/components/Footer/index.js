import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-wrapper']}>
        <h3>Outer Limits Designs</h3>
      </div>
    </footer>
  );
};

export default Footer;