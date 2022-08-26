import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import ProductAttributes from '../ProductAttributes';
import CartType from '../../type/Cart';
import ProductPrice from '../ProductPrice';
import Image from '../Image';
import UpdateCartButton from '../UpdateCartButton';
import { TYPE_STYLE_SMALL } from '../ProductAttributes/ProductAttributes.config';
import { REMOVE_FROM_CART } from '../UpdateCartButton/UpdateCartButton.config';

import './CartOverlayItem.style.scss';

export class CartOverlayItem extends PureComponent {
  static propTypes = {
    product: CartType.isRequired,
  };

  renderAttributes() {
    const { product } = this.props;
    const { attributes, selectedAttributes } = product;

    return (
      <ProductAttributes
        attributes={attributes}
        className="CartOverlayItem-Attribute"
        parameters={selectedAttributes}
        typeStyle={TYPE_STYLE_SMALL}
      />
    );
  }

  renderProductPrice() {
    const { product } = this.props;
    const { prices } = product;

    return <ProductPrice prices={prices} className="CartOverlayItem-Price" />;
  }

  renderImage() {
    const { product } = this.props;
    const { gallery, name, id } = product;
    const [firstImage] = gallery;

    return (
      <Link className="CartOverlayItem-ImageWrapper" to={`/pd/${id}`}>
        <Image src={firstImage} alt={name} className="CartOverlayItem-Image" />
      </Link>
    );
  }

  renderTitle() {
    const { product } = this.props;
    const { id, brand, name } = product;

    return (
      <Link className="CartOverlayItem-Title" to={`/pd/${id}`}>
        <span className="CartOverlayItem-Brand">{brand}</span>
        <span className="CartOverlayItem-Name">{name}</span>
      </Link>
    );
  }

  renderButtons() {
    const { product } = this.props;
    const { qty, selectedAttributes } = product;

    return (
      <div className="CartOverlayItem-Buttons">
        <UpdateCartButton
          product={product}
          selectedAttributes={selectedAttributes}
          className="CartOverlayItem-Button CartOverlayItem-Button_add"
        />
        <span className="CartOverlayItem-ButtonAmount">{qty}</span>
        <UpdateCartButton
          product={product}
          selectedAttributes={selectedAttributes}
          typeButton={REMOVE_FROM_CART}
          className="CartOverlayItem-Button CartOverlayItem-Button_remove"
        />
      </div>
    );
  }

  renderContent() {
    return (
      <div className="CartOverlayItem-Content">
        <div className="CartOverlayItem-Info">
          {this.renderTitle()}
          {this.renderProductPrice()}
          {this.renderAttributes()}
        </div>
        {this.renderButtons()}
      </div>
    );
  }

  renderContainer() {
    return (
      <li className="CartOverlayItem">
        {this.renderContent()}
        {this.renderImage()}
      </li>
    );
  }

  render() {
    return this.renderContainer();
  }
}

export default CartOverlayItem;
