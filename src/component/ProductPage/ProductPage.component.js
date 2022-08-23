import React, { PureComponent } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

import { ProductType } from '../../type/ProductList';
import ProductGallery from '../ProductGallery';
import ProductAttributes from '../ProductAttributes';
import ProductPrice from '../ProductPrice';
import AddToCartButton from '../AddToCartButton';

import './ProductPage.style.scss';

export class ProductPage extends PureComponent {
  static propTypes = {
    product: ProductType.isRequired,
    getAttributes: PropTypes.func.isRequired,
    selectedAttributes: PropTypes.shape({}).isRequired,
  };

  renderProductGallery() {
    const {
      product: { gallery },
    } = this.props;
    return <ProductGallery gallery={gallery} />;
  }

  renderProductAttributes() {
    const {
      getAttributes,
      product: { attributes },
      selectedAttributes,
    } = this.props;

    return (
      <ProductAttributes
        attributes={attributes}
        updateParameters={getAttributes}
        className="ProductInfo-Attribute"
        parameters={selectedAttributes}
      />
    );
  }

  renderPrice() {
    const {
      product: { prices },
    } = this.props;

    return (
      <div className="ProductInfo-PriceWrapper">
        <span className="ProductInfo-PriceName">price:</span>
        <ProductPrice prices={prices} className="ProductInfo-Price" />
      </div>
    );
  }

  renderAddToCart() {
    const { product, selectedAttributes } = this.props;

    return (
      product.inStock && (
        <AddToCartButton selectedAttributes={selectedAttributes} product={product}>
          Add to cart
        </AddToCartButton>
      )
    );
  }

  renderProductDescription() {
    const {
      product: { description },
    } = this.props;

    return <div className="ProductInfo-Description">{parse(description)}</div>;
  }

  renderProductTitle() {
    const {
      product: { brand, name },
    } = this.props;

    return (
      <h1 className="ProductInfo-Title">
        <span className="ProductInfo-Brand">{brand}</span>
        {name}
      </h1>
    );
  }

  renderContentWrapper() {
    return (
      <div className="ProductPage-Wrapper">
        {this.renderProductGallery()}
        <div className="ProductInfo">
          {this.renderProductTitle()}
          {this.renderProductAttributes()}
          {this.renderPrice()}
          {this.renderAddToCart()}
          {this.renderProductDescription()}
        </div>
      </div>
    );
  }

  render() {
    return this.renderContentWrapper();
  }
}

export default ProductPage;
