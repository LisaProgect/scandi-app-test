import { configureStore } from '@reduxjs/toolkit';

import currencyReducer from './slices/currencySlice';
import CartReducer from './slices/cartSlice';

export default configureStore({
  reducer: { currency: currencyReducer, cart: CartReducer },
});
