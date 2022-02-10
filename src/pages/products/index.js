import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductList from '../components/ProductList';
import { getProductList } from '../../utils/products';

const Products = ({ productList }) => {
    return (
      <>
        <Head>
          <title>Products // Outer Limits Designs</title>
        </Head>
        <div className='page-wrapper'>
          <Header bgImage={'/images/featured-3.png'} />
          <main>
            <ProductList products={productList} />
          </main>
          <Footer />
        </div>
      </>
    );
  };

  export const getStaticProps = async () => {
    const productList = await getProductList();
    return {
      props: {
        productList,
      },
    };
  };
  
  export default Products;