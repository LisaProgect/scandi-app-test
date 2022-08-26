import {
  addProductToCart,
  removeProductFromCart,
  removeAllProductsFromCart,
} from './Cart.action';

export class CartDispatcher {
  addProductToCart(dispatch, product) {
    const currentProduct = this._getNormalizeProduct(product, 1);

    dispatch(addProductToCart(currentProduct));
  }

  removeProductFromCart(dispatch, product) {
    const currentProduct = this._getNormalizeProduct(product, -1);

    dispatch(removeProductFromCart(currentProduct));
  }

  removeAllProductsFromCart(dispatch) {
    dispatch(removeAllProductsFromCart());
  }

  _getNormalizeProduct(product, value) {
    const { id, attributes, brand, gallery, name, prices, selectedAttributes } = product;

    return {
      id,
      attributes,
      brand,
      gallery,
      name,
      qty: value,
      prices,
      selectedAttributes,
    };
  }
}

export default new CartDispatcher();
