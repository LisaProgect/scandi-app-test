/* eslint-disable consistent-return */
import BrowserDatabase from '../../util/BrowserDatabase';
import { getTotalPrice } from '../../util/Price';
import { getQtyProductsInCart, updateCartItems } from '../../util/Cart';
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART,
  REMOVE_PRODUCT_FROM_CART,
} from './Cart.action';

export const CART_LIST = 'cart_list';
export const CART_TOTAL = 'cart_total';

const initialState = {
  cartList: BrowserDatabase.getItem(CART_LIST) || [],
  cartTotal: BrowserDatabase.getItem(CART_TOTAL) || { prices: [], qtyProductInCart: 0 },
};

const updateProductCart = (state, product) => {
  const { cartList } = state;

  const updateCartList = updateCartItems(cartList, product);
  const prices = getTotalPrice(updateCartList);
  const qtyProductInCart = getQtyProductsInCart(updateCartList);
  const cartTotal = { prices, qtyProductInCart };

  BrowserDatabase.setItem(updateCartList, CART_LIST);
  BrowserDatabase.setItem(cartTotal, CART_TOTAL);

  return { cartList: updateCartList, cartTotal };
};

export default (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return updateProductCart(state, payload);

    case REMOVE_PRODUCT_FROM_CART:
      return updateProductCart(state, payload);

    case REMOVE_ALL_PRODUCTS_FROM_CART:
      return [];

    default:
      return state;
  }
};
