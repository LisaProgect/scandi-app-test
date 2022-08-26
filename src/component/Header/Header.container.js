import React, { PureComponent } from 'react';
import { Query } from '@apollo/client/react/components';

import Header from './Header.component';
import Loader from '../Loader';
import GET_QUERY_MENU from '../../query/Menu.query';

export class HeaderContainer extends PureComponent {
  render() {
    return (
      <Query query={GET_QUERY_MENU}>
        {({ data, loading, error }) => {
          if (error) return 'error';
          if (loading) return <Loader isLoading={loading} />;

          const { currencies, categories } = data;
          return <Header currencies={currencies} categories={categories} />;
        }}
      </Query>
    );
  }
}

export default HeaderContainer;
