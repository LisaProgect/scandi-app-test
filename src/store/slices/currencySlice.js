import { createSlice } from '@reduxjs/toolkit';

import BrowserDatabase from '../../util/BrowserDatabase';

export const CURRENT_CURRENCY_ITEM = 'current_currency_item';

const initialState = {
  currency: BrowserDatabase.getItem(CURRENT_CURRENCY_ITEM) || '$',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency: (state, { payload }) => {
      const currentCurrencySymbol = BrowserDatabase.getItem(CURRENT_CURRENCY_ITEM);

      if (currentCurrencySymbol !== payload) {
        BrowserDatabase.setItem(payload, CURRENT_CURRENCY_ITEM);
        state.currency = payload;
      }
    },
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
