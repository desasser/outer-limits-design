import styles from "./aboutImage.module.css";
import Image from "next/image";

const AboutImage = () => {
  return (
    <div className={styles['about-image-wrapper']}>
      <Image
        className={styles["about-image"]}
        src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
        alt="Picture of the owner of Outer Limits Design"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default AboutImage;