export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const REMOVE_ALL_PRODUCTS_FROM_CART = 'REMOVE_ALL_PRODUCTS_FROM_CART';

export const addProductToCart = (payload) => ({
  type: ADD_PRODUCT_TO_CART,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload,
});

export const removeAllProductsFromCart = (payload) => ({
  type: REMOVE_ALL_PRODUCTS_FROM_CART,
  payload,
});
