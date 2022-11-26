import styles from "./aboutContent.module.css";

const AboutContent = () => {
  return (
    <div className={styles['about-wrapper']}>
      <h2>About Outer Limits Designs</h2>
      <div className={styles['about-wrapper-body']}>
        <p>
          I am an engineer, designer, and artist from the Pacific Northwest by way of Louisiana. My mom inspired and encouraged me through my developmental years to embrace my creative side and I tested myself with many different arts. My dad served as a guiding star through my STEM interests, as a scientist and engineer.  Through my 20s, I explored various roles from visual arts to industrial design to mechanical engineering and worked as a product designer, creating 3D models and designs for people to have fun in the outdoors. I have since taken all of my experiences and am actively translating them into my passion for software development, code, and design. 
        </p>
        <p>
          These days, I work on front end software and explore good UX/UI design implementation. I am always learning more and am eager to practice, change, and develop my abilities. Simultaneously, I have created this brand, Outer Limits Designs, to explore all of my non-professional hobbies. I started with 3D printing, focused on dice masters for people to make resin cast sets of dice, mostly for TTRPGs, but I am constantly expanding and always open to new opportunities.
        </p>
        <p>
          From here, I have few plans. Ideas are constantly tumbling around in my head and I am always looking for new ideas that capture my imagination. If you are interested in working with me, please reach out! You can find me on <a href="https://www.instagram.com/outer.limits.designs/">Instagram</a> and <a href="https://www.etsy.com/shop/OuterLimitsDesigns">Etsy</a> or you can email me at <a href = "mailto: design.outerlimits@gmail.com">design.outerlimits@gmail.com</a>. Thanks!
        </p>
      </div>
    </div>
  );
};

export default AboutContent;