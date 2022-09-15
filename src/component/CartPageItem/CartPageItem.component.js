import PropTypes from 'prop-types';
import React, { PureComponent, createRef } from 'react';
import { Link } from 'react-router-dom';

import CartType from '../../type/Cart';
import ProductAttributes from '../ProductAttributes';
import ProductPrice from '../ProductPrice';
import UpdateCartButton from '../UpdateCartButton';
import Image from '../Image';
import { REMOVE_FROM_CART } from '../UpdateCartButton/UpdateCartButton.config';
import SliderButton from '../SliderButton';
import CSS from '../../util/CSS';

import './CartPageItem.style.scss';

export class CartPageItem extends PureComponent {
  static propTypes = {
    product: CartType.isRequired,
    offsetImage: PropTypes.number.isRequired,
    registerRef: PropTypes.func.isRequired,
    onClickButtonNext: PropTypes.func.isRequired,
    onClickButtonPrev: PropTypes.func.isRequired,
  };

  imageRef = createRef();

  galleryRef = createRef();

  componentDidMount() {
    const { registerRef } = this.props;

    registerRef(this.imageRef);
  }

  renderPrice() {
    const { product } = this.props;
    const { prices } = product;

    return <ProductPrice prices={prices} className="CartPageItem-Price" />;
  }

  renderAttributes() {
    const {
      product: { attributes, selectedAttributes },
    } = this.props;

    return (
      <ProductAttributes
        attributes={attributes}
        className="CartPageItem-Attribute"
        parameters={selectedAttributes}
      />
    );
  }

  renderTitle() {
    const { product } = this.props;
    const { brand, name, id } = product;
    return (
      <Link className="CartPageItem-Title" to={`/pd/${id}`}>
        <span className="CartPageItem-Brand">{brand}</span>
        <span className="CartPageItem-Name">{name}</span>
      </Link>
    );
  }

  renderImage = (src) => {
    const { product } = this.props;
    const { id } = product;

    return (
      <Link
        key={src}
        to={`/pd/${id}`}
        className="CartPageItem-ImageLink"
        ref={this.imageRef}
      >
        <Image src={src} className="CartPageItem-Image" />
      </Link>
    );
  };

  renderGalleryButtons() {
    const { product, onClickButtonNext, onClickButtonPrev } = this.props;
    const { gallery } = product;
    return (
      gallery.length > 2 && (
        <>
          <SliderButton
            className="CartPageItem-GalleryButton_prev"
            rotation="Left"
            onClickButton={onClickButtonPrev}
          />
          <SliderButton
            className="CartPageItem-GalleryButton_next"
            rotation="Right"
            onClickButton={onClickButtonNext}
          />
        </>
      )
    );
  }

  renderGallery() {
    const { product, offsetImage } = this.props;
    const { gallery } = product;

    CSS.setVariable(this.galleryRef, 'transform', `${-offsetImage}px`);

    return (
      <div ref={this.galleryRef} className="CartPageItem-Gallery">
        {gallery.map(this.renderImage)}
        {this.renderGalleryButtons()}
      </div>
    );
  }

  renderButtons() {
    const { product } = this.props;
    const { qty, selectedAttributes } = product;

    return (
      <div className="CartPageItem-Buttons">
        <UpdateCartButton
          product={product}
          selectedAttributes={selectedAttributes}
          className="CartPageItem-Button CartPageItem-Button_add"
        />
        <span className="CartPageItem-ButtonAmount">{qty}</span>
        <UpdateCartButton
          product={product}
          selectedAttributes={selectedAttributes}
          typeButton={REMOVE_FROM_CART}
          className="CartPageItem-Button CartPageItem-Button_remove"
        />
      </div>
    );
  }

  renderContainer() {
    return (
      <div className="CartPageItem-Wrapper">
        <div className="CartPageItem-InfoWrapper">
          {this.renderTitle()}
          {this.renderPrice()}
          {this.renderAttributes()}
        </div>
        <div className="CartPageItem-ActionWrapper">
          {this.renderButtons()}
          {this.renderGallery()}
        </div>
      </div>
    );
  }

  render() {
    return this.renderContainer();
  }
}

export default CartPageItem;
