import styles from "./aboutWrapper.module.css";
import AboutContent from "../AboutContent";
import AboutImage from "../AboutImage";

const AboutWrapper = () => {
  return (
    <section className="about-section">
      <AboutContent />
      <AboutImage />
    </section>
  );
};

export default AboutWrapper;