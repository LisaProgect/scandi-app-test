import { configureStore } from '@reduxjs/toolkit';

import currencyReducer from './slices/currencySlice';
import CartReducer from './slices/cartSlice';
import MessageReducer from './slices/messageSlice';

export default configureStore({
  reducer: { currency: currencyReducer, cart: CartReducer, messages: MessageReducer },
});
