import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
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
                    <section className="lunar-lander main-gradient-primary main-gradient-text">
                        <h1>Explore adjacent realities</h1>
                        <h1>beyond</h1>
                        <h1>mortal</h1>
                        <h1>realms</h1>
                    </section>
                    <ProductList products={productList} />
                    <About></About>
                    <h2>Contact</h2>
                    <h2>FAQ</h2>
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
