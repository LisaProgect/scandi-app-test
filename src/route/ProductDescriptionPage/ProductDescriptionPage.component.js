import React, { PureComponent } from 'react';

import { ProductType } from '../../type/ProductList';
import ContentWrapper from '../../component/ContentWrapper';
import ProductPage from '../../component/ProductPage';

import './ProductDescriptionPage.style.scss';

export class ProductDescriptionPage extends PureComponent {
  static propTypes = {
    product: ProductType,
  };

  static defaultProps = {
    product: {},
  };

  renderProductPage() {
    return <ProductPage {...this.props} />;
  }

  render() {
    return <ContentWrapper>{this.renderProductPage()}</ContentWrapper>;
  }
}

export default ProductDescriptionPage;
