import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import AboutContent from "../components/AboutContent";
// import AboutImage from "../components/AboutImage";
import AboutWrapper from "../components/AboutWrapper";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div className="page-wrapper">
        <Header />
        <main>
          {/* <section className="about-section">
            <AboutContent />
            <AboutImage />
          </section> */}
          <AboutWrapper />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
