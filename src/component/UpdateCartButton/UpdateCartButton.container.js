import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import UpdateCartButton from './UpdateCartButton.component';
import { ProductType } from '../../type/ProductList';
import CartDispatcher from '../../store/Cart/Cart.dispatcher';
import { ADD_TO_CART, REMOVE_FROM_CART } from './UpdateCartButton.config';

export class UpdateCartButtonContainer extends PureComponent {
  static propTypes = {
    product: ProductType.isRequired,
    selectedAttributes: PropTypes.shape({}).isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    typeButton: PropTypes.string,
  };

  static defaultProps = {
    typeButton: ADD_TO_CART,
  };

  containerFunctions = {
    onClickButton: this.onClickButton.bind(this),
  };

  onClickButton() {
    if (this.validateAttributes()) {
      this.getCorrectAction();
    }
  }

  getCorrectAction() {
    const { product, selectedAttributes, addToCart, typeButton, removeFromCart } =
      this.props;
    if (typeButton === ADD_TO_CART) {
      addToCart({ ...product, selectedAttributes });
    }
    if (typeButton === REMOVE_FROM_CART) {
      removeFromCart({ ...product, selectedAttributes });
    }
  }

  validateAttributes() {
    const { product, selectedAttributes } = this.props;

    const { attributes } = product;
    const keysSelectedAttributes = Object.keys(selectedAttributes);

    return attributes.every(({ id }) => keysSelectedAttributes.includes(id));
  }

  render() {
    return <UpdateCartButton {...this.props} {...this.containerFunctions} />;
  }
}

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => CartDispatcher.addProductToCart(dispatch, product),
  removeFromCart: (product) => CartDispatcher.removeProductFromCart(dispatch, product),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCartButtonContainer);
