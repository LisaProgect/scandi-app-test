import React, { PureComponent } from 'react';
import { Query } from '@apollo/client/react/components';

import WithRouter from '../../util/WithRouterProp';
import RouteType from '../../type/Route';
import ProductDescriptionPage from './ProductDescriptionPage.component';
import GET_PRODUCT_BY_ID from '../../query/Product.query';

export class ProductDescriptionPageContainer extends PureComponent {
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
      <Query query={GET_PRODUCT_BY_ID} variables={{ ...params }}>
        {({ data, loading, error }) => {
          if (error) return 'error';
          if (loading) return 'loading ...';

          const { product } = data;

          return <ProductDescriptionPage product={product} />;
        }}
      </Query>
    );
  }

  render() {
    return this.getQueryContent();
  }
}

export default WithRouter(ProductDescriptionPageContainer);
