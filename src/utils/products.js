import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-us-west-2.graphcms.com/v2/ckyq5nqka0veu01yz64md8dk3/master'
);

export const getProductList = async () => {
  const { products } = await graphcms.request(
    `{
        products(orderBy: createdAt_DESC) {
          productName
          price
          createdAt
          id
          slug
          productImage {
            id
            fileName
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
  const { products } = await graphcms.request(
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
  const { product } = await graphcms.request(
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