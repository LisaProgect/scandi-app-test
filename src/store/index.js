/* eslint-disable operator-linebreak */
import { createStore } from 'redux';

import CurrencyReducer from './Currency/Currency.reducer';

const store = createStore(
  CurrencyReducer,
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      trace: true,
    }),
);

export default store;
