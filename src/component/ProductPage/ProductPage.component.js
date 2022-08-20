import React, { PureComponent } from 'react';
import parse from 'html-react-parser';

import { ProductType } from '../../type/ProductList';
import ProductGallery from '../ProductGallery';

import './ProductPage.style.scss';

export class ProductPage extends PureComponent {
  static propTypes = {
    product: ProductType.isRequired,
  };

  renderProductGallery() {
    const {
      product: { gallery },
    } = this.props;
    return <ProductGallery gallery={gallery} />;
  }

  renderContentWrapper() {
    const {
      product: { description },
    } = this.props;
    return (
      <div className="ProductPage-Wrapper">
        {this.renderProductGallery()}
        {parse(description)}
      </div>
    );
  }

  render() {
    return this.renderContentWrapper();
  }
}

export default ProductPage;
