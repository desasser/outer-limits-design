import styles from './landingContent.module.css';

const LandingContent = () => {
  return (
    <section className={styles['lunar-wrap']}>
      <div className={styles['lunar-lander']}>
        <h1 className={styles['lander-top']}>Explore adjacent realities</h1>
      </div>
      <div className={styles['lunar-lander-two']}>
        <h1 className={styles['lander-bottom']}>Travel beyond mortal realms</h1>
      </div>
    </section>
    );
};

export default LandingContent;