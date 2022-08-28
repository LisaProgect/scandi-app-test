import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import UpdateCartButton from './UpdateCartButton.component';
import { ProductType } from '../../type/ProductList';
import { updateCart } from '../../store/slices/cartSlice';
import { showMessage, hideMessage } from '../../store/slices/messageSlice';
import { ADD_TO_CART, REMOVE_FROM_CART } from './UpdateCartButton.config';

export class UpdateCartButtonContainer extends PureComponent {
  static propTypes = {
    product: ProductType.isRequired,
    selectedAttributes: PropTypes.shape({}).isRequired,
    updateCart: PropTypes.func.isRequired,
    typeButton: PropTypes.string,
    showMessage: PropTypes.func.isRequired,
    hideMessage: PropTypes.func.isRequired,
  };

  static defaultProps = {
    typeButton: ADD_TO_CART,
  };

  containerFunctions = {
    onClickButton: this.onClickButton.bind(this),
  };

  onClickButton() {
    const { showMessage: showCurrentMessage, hideMessage: hideCurrentMessage } =
      this.props;
    if (this.validateAttributes()) {
      hideCurrentMessage();
      this.getCorrectAction();
    } else {
      const message = {
        type: 'error',
        text: 'Please select all attributes',
      };
      showCurrentMessage(message);
    }
  }

  getCorrectAction() {
    const {
      product,
      selectedAttributes,
      updateCart: updateProductCart,
      typeButton,
    } = this.props;
    if (typeButton === ADD_TO_CART) {
      updateProductCart({ data: { ...product, selectedAttributes }, value: 1 });
    }
    if (typeButton === REMOVE_FROM_CART) {
      updateProductCart({ data: { ...product, selectedAttributes }, value: -1 });
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

export const mapDispatchToProps = { updateCart, showMessage, hideMessage };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCartButtonContainer);
