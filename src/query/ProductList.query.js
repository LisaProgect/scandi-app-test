import { gql } from '@apollo/client';

const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetCategory($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        brand
        inStock
        gallery
        attributes {
          id
          name
          type
          items {
            displayValue
            value
          }
        }
        prices {
          amount
          currency {
            label
            symbol
          }
        }
      }
    }
  }
`;

export default GET_PRODUCTS_BY_CATEGORY;
