import React, { PureComponent } from 'react';

import { ProductItemsType } from '../../type/ProductList';
import ProductList from './ProductList.component';

export class ProductListContainer extends PureComponent {
  static propTypes = {
    products: ProductItemsType,
  };

  static defaultProps = {
    products: [],
  };

  render() {
    return <ProductList {...this.props} />;
  }
}

export default ProductListContainer;
