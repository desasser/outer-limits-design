import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from '../components/PostList';
import { getPostList } from '../utils/posts';

const Home = ({ postList }) => {
  return (
    <>
      <Head>
        <title>Outer Limits Design</title>
      </Head>
      <div className="page-wrapper">
        <Header />
        <main>
          <PostList posts={postList} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps = () => {
  const postList = getPostList();
  return {
    props: {
      postList,
    },
  };
};

export default Home;
