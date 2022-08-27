import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CartType from '../../type/Cart';
import CartOverlay from './CartOverlay.component';

export class CartOverlayContainer extends PureComponent {
  static propTypes = {
    cartList: PropTypes.arrayOf(CartType),
  };

  static defaultProps = {
    cartList: [],
  };

  state = {
    isOpenedCart: false,
  };

  containerFunctions = {
    onCartClick: this.onCartClick.bind(this),
    onCartOutsideClick: this.onCartOutsideClick.bind(this),
  };

  onCartClick() {
    this.setState((state) => ({
      isOpenedCart: !state.isOpenedCart,
    }));
  }

  onCartOutsideClick() {
    this.setState({
      isOpenedCart: false,
    });
  }

  render() {
    return <CartOverlay {...this.props} {...this.state} {...this.containerFunctions} />;
  }
}

export const mapStateToProps = (state) => ({
  cartList: state.cart.cartList,
  qtyProductInCart: state.cart.cartTotal.qtyProductInCart,
  totalPrice: state.cart.cartTotal.prices,
});

export const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlayContainer);
