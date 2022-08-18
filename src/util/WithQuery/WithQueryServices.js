import React from 'react';
import { useQuery } from '@apollo/client';

import GET_CURRENCIES from '../../query/Currencies.query';
import GET_PRODUCTS_BY_CATEGORY from '../../query/ProductList.query';

const WithQuery = (QUERY) => (WrappedComponent) =>
  function ComponentWithQueryProp({ ...props }) {
    const { loading, error, data } = useQuery(QUERY);

    if (loading) return '...loading';
    if (error) return '...error';

    return <WrappedComponent {...props} {...data} />;
  };

const WithQueryServices = {
  withCurrencies: WithQuery(GET_CURRENCIES),
  withProductList: WithQuery(GET_PRODUCTS_BY_CATEGORY),
};

export default WithQueryServices;
