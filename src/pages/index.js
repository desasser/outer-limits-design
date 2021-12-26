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
        <Header />
        <main>
          <h2>Hello from Outer Limits Design!</h2>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
