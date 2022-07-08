import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SinglePost from '../../components/SinglePost';
import { getPostSlugs, getPostData } from '../../utils/posts';

const BlogPost = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.postTitle} // Outer Limits Designs</title>
      </Head>
      <div className='page-wrapper'>
        <Header bgImage='/images/old_bg.jpg' />
        <main>
        <SinglePost post={postData} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;