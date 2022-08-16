export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const UPDATE_TOTALS = 'UPDATE_TOTALS';

export const addProductToCart = (newProduct) => ({
  type: ADD_PRODUCT_TO_CART,
  newProduct,
});

export const removeProductFromCart = (product) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  product,
});

export const updateTotals = (cartData) => ({
  type: UPDATE_TOTALS,
  cartData,
});
