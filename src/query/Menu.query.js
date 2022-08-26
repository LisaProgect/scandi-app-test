import { gql } from '@apollo/client';

const GET_QUERY_MENU = gql`
  query {
    currencies {
      label
      symbol
    }
    categories {
      name
    }
  }
`;

export default GET_QUERY_MENU;
