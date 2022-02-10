import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SingleProduct from '../../components/SingleProduct';
import { getProductSlugs, getProductData } from '../../utils/products';

const Product = ({ productData }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>{productData.productName} // UP Boutique</title>
            </Head>
            <div className='page-wrapper'>
                <Header bgImage={productData.productImage.url} />
                <main>
                    <SingleProduct product={productData} />
                </main>
                <Footer />
            </div>
        </>
    );
};

export const getStaticPaths = async () => {
    const paths = await getProductSlugs();
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async ({ params }) => {
    const productData = await getProductData(params.slug);

    // throw 404
    if (!productData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            productData,
        },
    };
};

export default Product;