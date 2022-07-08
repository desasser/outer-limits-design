import Link from "next/link";
import Image from "next/image";
import styles from "./productList.module.css";

const ProductList = ({ products = [] }) => {
  return (
    <section className={styles["product-list"]}>
      <h2 className={styles["product-list-title"]}>Products</h2>
      <div className={styles["product-list-alert"]}>
        <p>At this time, sales are not enabled on this site. I am currently adding purchasing options via PayPal and/or Stripe. For now, please message me on <a href="https://www.instagram.com/outer.limits.designs/">Instagram</a> or <a href="https://www.etsy.com/shop/OuterLimitsDesigns">Etsy</a>. Thanks!</p>
      </div>
      <div className={styles["product-list-grid"]}>
        {products.length ? (
          products.map(({ id, productName, price, productImage, slug }) => (
            <div key={id} className={styles["product-item"]}>
              <Link href={`/products/${slug}`}>
                <div className={styles["product-image-wrapper"]}>
                  <Image
                    className={styles["product-image"]}
                    src={productImage.url}
                    alt={`Featured image for ${productName}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </Link>
              <Link href={`/products/${slug}`}>
                <a>
                  <h3 className={styles["product-name"]}>{productName}</h3>
                  <h4 className={styles["product-price"]}>${price}</h4>
                </a>
              </Link>
            </div>
          ))
        ) : (
          <h3>No products to display!</h3>
        )}
      </div>
    </section>
  );
};

export default ProductList;
