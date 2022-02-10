import Image from 'next/image';
import styles from './singleProduct.module.css';

const SingleProduct = ({ product }) => {
  const { productImage, productName, price, description } = product;

  return (
    <section className={styles['product']}>
      <div className={styles['product-wrapper']}>
        <div className={styles['product-image-wrapper']}>
          <Image
            className={styles['product-image']}
            src={productImage.url}
            alt={`Featured image for ${productName}`}
            layout="intrinsic"
            width={productImage.width}
            height={productImage.height}
          />
        </div>
        <div className={styles['product-data']}>
          <h2 className={styles['product-name']}>{productName}</h2>
          <h3 className={styles['product-price']}>${price}</h3>
          <p
            className={styles['product-description']}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;