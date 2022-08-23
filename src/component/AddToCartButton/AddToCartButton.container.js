import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import AddToCartButton from './AddToCartButton.component';
import { ProductType } from '../../type/ProductList';
import CartDispatcher from '../../store/Cart/Cart.dispatcher';

export class AddToCartButtonContainer extends PureComponent {
  static propTypes = {
    product: ProductType.isRequired,
    selectedAttributes: PropTypes.shape({}).isRequired,
    addToCart: PropTypes.func.isRequired,
  };

  containerFunctions = {
    onClickAddToCart: this.onClickAddToCart.bind(this),
  };

  onClickAddToCart() {
    const { product, selectedAttributes, addToCart } = this.props;

    if (this.validateAttributes()) {
      addToCart({ ...product, selectedAttributes });
    }
  }

  validateAttributes() {
    const { product, selectedAttributes } = this.props;

    const { attributes } = product;
    const keysSelectedAttributes = Object.keys(selectedAttributes);

    return attributes.every(({ id }) => keysSelectedAttributes.includes(id));
  }

  render() {
    return <AddToCartButton {...this.props} {...this.containerFunctions} />;
  }
}

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => CartDispatcher.addProductToCart(dispatch, product),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButtonContainer);
