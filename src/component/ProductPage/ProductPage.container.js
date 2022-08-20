import React, { PureComponent } from 'react';

import ProductPage from './ProductPage.component';
import { ProductType } from '../../type/ProductList';

export class ProductPageContainer extends PureComponent {
  static propTypes = {
    product: ProductType.isRequired,
  };

  render() {
    const { product } = this.props;
    return <ProductPage product={product} />;
  }
}

export default ProductPageContainer;
