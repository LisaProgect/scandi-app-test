/* eslint-disable operator-linebreak */
import { createStore, combineReducers } from 'redux';

import CurrencyReducer from './Currency/Currency.reducer';
import CartReducer from './Cart/Cart.reducer';

const store = createStore(
  combineReducers({ CurrencyReducer, CartReducer }),
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      trace: true,
    }),
);

export default store;
