import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CartType from '../../type/Cart';
import CartPage from './CartPage.component';
import CartDispatcher from '../../store/Cart/Cart.dispatcher';

export class CartPageContainer extends PureComponent {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    cartList: PropTypes.arrayOf(CartType),
  };

  static defaultProps = {
    cartList: [],
  };

  render() {
    return <CartPage {...this.props} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(CartPageContainer);
