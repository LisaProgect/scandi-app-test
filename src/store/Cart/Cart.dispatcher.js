import { addProductToCart, removeProductFromCart } from './Cart.action';

export class CartDispatcher {
  addProductToCart(dispatch, product) {
    const currentProduct = this._getNormalizeProduct(product, 1);

    dispatch(addProductToCart(currentProduct));
  }

  removeProductFromCart(dispatch, product) {
    const currentProduct = this._getNormalizeProduct(product, -1);

    dispatch(removeProductFromCart(currentProduct));
  }

  _getNormalizeProduct(product, value) {
    const { id, attributes, brand, gallery, name, prices, selectedAttributes } = product;

    const currentSelectedAttributes = {
      items: selectedAttributes,
      count: value,
    };

    const normalizeProduct = {
      id,
      attributes,
      brand,
      gallery,
      name,
      prices,
      selectedAttributes: currentSelectedAttributes,
    };

    return normalizeProduct;
  }
}

export default new CartDispatcher();
