import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQcontent from "../components/FAQcontent";

const FAQ = () => {
  return (
    <>
      <Head>
        <title>FAQ Page</title>
      </Head>
      <div className="page-wrapper">
        <Header />
        <main>
          <FAQcontent />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
