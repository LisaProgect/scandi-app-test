import { createSlice } from '@reduxjs/toolkit';
import BrowserDatabase from '../../util/BrowserDatabase';
import { getTotalPrice } from '../../util/Price';
import { getQtyProductsInCart, updateCartItems } from '../../util/Cart';

export const CART_LIST = 'cart_list';
export const CART_TOTAL = 'cart_total';

const initialState = {
  cartList: BrowserDatabase.getItem(CART_LIST) || [],
  cartTotal: BrowserDatabase.getItem(CART_TOTAL) || { prices: [], qtyProductInCart: 0 },
};

const getNormalizeProduct = (product, value) => {
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

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const normalizeProduct = getNormalizeProduct(action.payload);
      const updateState = updateProductCart(state, normalizeProduct);
      state.cartList.push(updateState);
      const product = state.cartList.find(({ id }) => updateState.id === id);
      console.log(product);
    },
    removeProductFromCart: () => {},
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
