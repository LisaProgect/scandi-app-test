import BrowserDatabase from '../../util/BrowserDatabase';
import { ADD_PRODUCT_TO_CART, UPDATE_TOTALS, REMOVE_PRODUCT_FROM_CART } from './Cart.action';

export const CART_TOTALS = 'cart_totals';

const initialState = {
  cartTotals: BrowserDatabase.getItem(CART_TOTALS) || {},
};

export const CartReducer = (state = initialState, actions) => {
  const { type } = actions;

  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return;

    case UPDATE_TOTALS:
      return;

    case REMOVE_PRODUCT_FROM_CART:
      return;

    default:
      return state;
  }
};
