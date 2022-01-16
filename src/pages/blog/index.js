import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getPostList } from '../../utils/posts';

const Blog = ({ postList }) => {
  return (
    <>
      <Head>
        <title>Blog // Outer Limits Designs</title>
      </Head>
      <div className='page-wrapper'>
        <Header />
        <main>
          <pre>{JSON.stringify(postList, null, 2)}</pre>
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

export default Blog;