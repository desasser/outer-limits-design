import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Outer Limits Design</title>
      </Head>
      <div className="page-wrapper">
        {/* <Header /> */}
        <main>
          <img src="/images/under_construction.jpg" />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
