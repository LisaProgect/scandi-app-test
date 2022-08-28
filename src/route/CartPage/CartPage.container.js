import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CartType from '../../type/Cart';
import CartPage from './CartPage.component';
import { resetCart } from '../../store/slices/cartSlice';

export class CartPageContainer extends PureComponent {
  static propTypes = {
    cartList: PropTypes.arrayOf(CartType),
    resetCart: PropTypes.func.isRequired,
  };

  static defaultProps = {
    cartList: [],
  };

  containerFunctions = {
    onOrderClick: this.onOrderClick.bind(this),
  };

  onOrderClick() {
    const { resetCart: handelResetCart } = this.props;
    handelResetCart();
  }

  render() {
    return <CartPage {...this.props} {...this.containerFunctions} />;
  }
}

export const mapStateToProps = (state) => ({
  cartList: state.cart.cartList,
  qtyProductInCart: state.cart.cartTotal.qtyProductInCart,
  totalPrice: state.cart.cartTotal.prices,
});

export const mapDispatchToProps = { resetCart };

export default connect(mapStateToProps, mapDispatchToProps)(CartPageContainer);
