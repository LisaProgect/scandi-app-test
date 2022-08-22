import React, { PureComponent } from 'react';

import ProductPage from './ProductPage.component';
import { ProductType } from '../../type/ProductList';

export class ProductPageContainer extends PureComponent {
  static propTypes = {
    product: ProductType.isRequired,
  };

  state = {
    selectedAttributes: {},
  };

  containerFunctions = {
    getAttributes: this._getAttributes.bind(this),
  };

  _getAttributes(code, value) {
    this.setState(({ selectedAttributes }) => ({
      selectedAttributes: {
        ...selectedAttributes,
        [code]: value,
      },
    }));
  }

  render() {
    return <ProductPage {...this.props} {...this.state} {...this.containerFunctions} />;
  }
}

export default ProductPageContainer;
