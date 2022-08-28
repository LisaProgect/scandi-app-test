import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CartType from '../../type/Cart';
import CartOverlay from './CartOverlay.component';
import { resetCart } from '../../store/slices/cartSlice';

export class CartOverlayContainer extends PureComponent {
  static propTypes = {
    cartList: PropTypes.arrayOf(CartType),
    resetCart: PropTypes.func.isRequired,
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
    onOrderClick: this.onOrderClick.bind(this),
  };

  onOrderClick() {
    const { resetCart: handelResetCart } = this.props;

    handelResetCart();
  }

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

export const mapDispatchToProps = { resetCart };

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlayContainer);
