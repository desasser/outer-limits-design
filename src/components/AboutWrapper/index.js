import styles from "./aboutWrapper.module.css";
import AboutContent from "../AboutContent";
import AboutImage from "../AboutImage";

const AboutWrapper = () => {
  return (
    <section className={styles["about-section"]}>
      <h2 className={styles["about-header"]}>Greetings Earthling, Nice to Meet You</h2>
      <div className={styles["about-content-section"]}>
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
};

export default AboutWrapper;