import styles from "./aboutContent.module.css";

const AboutContent = () => {
  return (
    <div className={styles['about-wrapper-body']}>
      <p>
        I am Daniel, the force behind Outer Limits Design. I am a product designer and web developer but I have dabbled in many other passions and am constantly reining in my temptations to learn a bit of everything. Most of what I do is 3D modeling and printing, focusing on dice masters for people to make artisan resin cast dice, but I also work on miniatures, maps, molds, terrain, and more gaming accessories.
      </p>
      <p>
        For the future, I have a few plans. Ideas are constantly tumbling around in my head and I am always looking for fun, new concepts that capture my imagination. If you are interested in working with me, please reach out! You can find me on <a href="https://www.instagram.com/outer.limits.designs/">Instagram</a> and <a href="https://www.etsy.com/shop/OuterLimitsDesigns">Etsy</a> or you can email me at <a href = "mailto: design.outerlimits@gmail.com">design.outerlimits@gmail.com</a>. Thanks!
      </p>
    </div>
  );
};

export default AboutContent;