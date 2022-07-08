import styles from './footer.module.css';
import GithubLink from '../GithubLink';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-wrapper']}>
        <div>
          <h3>Outer Limits Designs</h3>
          <div className ={styles["social-buttons"]}>
            <GithubLink link="https://www.github.com/desasser"></GithubLink>
            <a target="_blank" href="https://www.instagram.com/outer.limits.designs/"><img src="/logos/instagram.svg"></img></a>
            <a></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;