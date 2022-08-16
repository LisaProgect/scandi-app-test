import React, { PureComponent } from 'react';
import { Query } from '@apollo/client/react/components';

import Menu from './Menu.component';
import Loader from '../Loader';
import GET_CATEGORIES from '../../query/Categories.query';

import './Menu.style.scss';

export class MenuContainer extends PureComponent {
  render() {
    return (
      <Query query={GET_CATEGORIES}>
        {({ data, loading, error }) => {
          if (loading) return <Loader isLoading />;
          if (error) return 'error';
          return <Menu menu={data.categories} />;
        }}
      </Query>
    );
  }
}

export default MenuContainer;
