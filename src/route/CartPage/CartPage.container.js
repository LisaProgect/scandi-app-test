import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CartType from '../../type/Cart';
import CartPage from './CartPage.component';

export class CartPageContainer extends PureComponent {
  static propTypes = {
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
  cartList: state.cart.cartList,
  qtyProductInCart: state.cart.cartTotal.qtyProductInCart,
  totalPrice: state.cart.cartTotal.prices,
});

export const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartPageContainer);
