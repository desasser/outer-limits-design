import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(
  'https://api-us-west-2.hygraph.com/v2/clak19w010e2z01t7f6hfhukt/master'
);

export const getProductList = async () => {
  const { products } = await hygraph.request(
    `query Products {
        products {
          id
          price
          productName
          slug
          createdAt
          productImage {
            fileName
            id
            url
            height
            width
          }
        }
      }`
  );

  return products;
};

export const getProductSlugs = async () => {
  const { products } = await hygraph.request(
    `{
        products {
          id
          slug
        }
      }`
  );

  return products.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    };
  });
};

export const getProductData = async (productSlug) => {
  const { product } = await hygraph.request(
    `query ProductPageQuery($productSlug: String!){
      product(where: {slug: $productSlug}) {
        productName
        price
        id
        description
        slug
        productImage {
          id
          fileName
          url
          height
          width
        }
      }
    }`,
    {
      productSlug,
    }
  );

  return product;
};