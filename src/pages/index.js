import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from '../components/PostList';
import ProductList from '../components/ProductList';
import { getPostList } from '../utils/posts';
import { getProductList } from '../utils/products';

const Home = ({ postList, productList }) => {
    return (
        <>
            <Head>
                <title>Outer Limits Design</title>
            </Head>
            <div className="page-wrapper">
                <Header />
                <main>
                    <ProductList products={productList} />
                    <PostList posts={postList} />
                </main>
                <Footer />
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const postList = getPostList();
    const productList = await getProductList();
    return {
        props: {
            postList,
            productList,
        },
    };
};

export default Home;
