import styles from './footer.module.css';
import GithubLink from '../GithubLink';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-wrapper']}>
        <div>
          <Link href="/">
            <a>
              <h3>Outer Limits Designs</h3>
            </a>
          </Link>
          <div className ={styles["social-buttons"]}>
            <a target="_blank" href="mailto:design.outerlimits@gmail.com"><img src="/logos/email.svg" /></a>
            <GithubLink link="https://www.github.com/desasser"></GithubLink>
            <a target="_blank" href="https://www.instagram.com/outer.limits.designs/"><img src="/logos/instagram.svg" /></a>
            <a></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;