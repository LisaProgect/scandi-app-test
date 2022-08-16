import React from 'react';
import { useQuery } from '@apollo/client';

import GET_CURRENCIES from '../../query/Currencies.query';

const withQuery =
  (QUERY, variables = {}) =>
  (WrappedComponent) =>
    function hocComponent({ ...props }) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { loading, error, data } = useQuery(QUERY, { variables });
      if (loading) return '...loading';
      if (error) return '...error';
      return <WrappedComponent {...props} {...data} />;
    };

const withQueryServices = {
  withCurrencies: withQuery(GET_CURRENCIES),
};

export default withQueryServices;
