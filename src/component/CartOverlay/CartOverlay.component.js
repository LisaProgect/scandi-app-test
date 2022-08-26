import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import CartType from '../../type/Cart';
import ClickOutside from '../ClickOutside';
import MinicartButton from '../MinicartButton';
import CartOverlayItem from '../CartOverlayItem';
import ProductPrice from '../ProductPrice';

import './CartOverlay.style.scss';

export class CartOverlay extends PureComponent {
  static propTypes = {
    cartList: PropTypes.arrayOf(CartType),
    qtyProductInCart: PropTypes.number.isRequired,
    onCartClick: PropTypes.func.isRequired,
    onCartOutsideClick: PropTypes.func.isRequired,
    isOpenedCart: PropTypes.bool.isRequired,
    totalPrice: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    cartList: [],
    totalPrice: [],
  };

  renderMiniCartButton() {
    const { qtyProductInCart, onCartClick } = this.props;

    return (
      <MinicartButton
        onMinicartButtonClick={onCartClick}
        miniCartItemsCount={qtyProductInCart}
      />
    );
  }

  renderActionButtons() {
    const { onCartClick } = this.props;

    return (
      <div className="CartOverlay-ActionButtons">
        <Link to="/cart" onClick={onCartClick} className="CartOverlay-ActionButtonLink">
          View bag
        </Link>
        <Link
          to="/cart"
          onClick={onCartClick}
          className="CartOverlay-ActionButtonLink CartOverlay-ActionButtonLink_green"
        >
          CHECK OUT
        </Link>
      </div>
    );
  }

  renderTotalPrice() {
    const { totalPrice } = this.props;
    return (
      <div className="CartOverlay-TotalPrice">
        <span className="CartOverlay-TotalPrice_name">Total</span>
        {!!totalPrice.length && (
          <ProductPrice prices={totalPrice} className="CartOverlay-TotalPrice_price" />
        )}
      </div>
    );
  }

  renderItem(product) {
    const { selectedAttributes, id } = product;

    const key = `${id}${Object.values(selectedAttributes)}`;

    return <CartOverlayItem key={key} product={product} />;
  }

  renderItems() {
    const { cartList } = this.props;

    return <ul className="CartOverlay-Items">{cartList.map(this.renderItem)}</ul>;
  }

  renderTitle() {
    const { qtyProductInCart } = this.props;
    return (
      <div className="CartOverlay-Title">
        <span className="CartOverlay-Title_bold">My Bag, </span>
        {qtyProductInCart} items
      </div>
    );
  }

  renderContainer() {
    const { onCartOutsideClick, isOpenedCart } = this.props;
    const miniCartClassName = classNames('Header-MiniCartWrapper', {
      'Header-MinicartWrapper_isVisible': isOpenedCart,
    });

    return (
      <>
        {this.renderMiniCartButton()}
        <div className={miniCartClassName}>
          <ClickOutside onClick={onCartOutsideClick} show={isOpenedCart}>
            <div className="CartOverlay">
              <div className="CartOverlay-Wrapper">
              {this.renderTitle()}
              {this.renderItems()}
              {this.renderTotalPrice()}
              {this.renderActionButtons()}
              </div>
            </div>
          </ClickOutside>
        </div>
      </>
    );
  }

  render() {
    return this.renderContainer();
  }
}

export default CartOverlay;
