import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CartType from '../../type/Cart';
import CartOverlay from './CartOverlay.component';
import CartDispatcher from '../../store/Cart/Cart.dispatcher';

export class CartOverlayContainer extends PureComponent {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
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
  cartList: state.CartReducer.cartList,
  qtyProductInCart: state.CartReducer.cartTotal.qtyProductInCart,
  totalPrice: state.CartReducer.cartTotal.prices,
});

export const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => CartDispatcher.addProductToCart(dispatch, product),
  removeFromCart: (product) => CartDispatcher.removeProductFromCart(dispatch, product),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlayContainer);
