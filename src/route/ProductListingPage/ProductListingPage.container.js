import React, { PureComponent } from 'react';
import { Query } from '@apollo/client/react/components';

import WithRouter from '../../util/WithRouterProp';
import RouteType from '../../type/Route';
import ProductListingPage from './ProductListingPage.component';
import GET_PRODUCTS_BY_CATEGORY from '../../query/ProductList.query';

export class ProductListingPageContainer extends PureComponent {
  static propTypes = {
    router: RouteType,
  };

  static defaultProps = {
    router: {},
  };

  getQueryContent() {
    const {
      router: { params },
    } = this.props;

    return (
      <Query query={GET_PRODUCTS_BY_CATEGORY} variables={{ ...params }}>
        {({ data, loading, error }) => {
          if (error) return 'error';
          if (loading) return 'loading ...';

          const {
            category: { products, name },
          } = data;

          return <ProductListingPage products={products} categoryTitle={name} />;
        }}
      </Query>
    );
  }

  render() {
    return this.getQueryContent();
  }
}

export default WithRouter(ProductListingPageContainer);
