/* eslint-disable default-param-last */
import BrowserDatabase from '../../util/BrowserDatabase';
import { CHANGE_CURRENCY } from './Currency.action';

export const CURRENT_CURRENCY_ITEM = 'current_currency_item';

const initialState = {
  currency: BrowserDatabase.getItem(CURRENT_CURRENCY_ITEM) || '$',
};

export default (state = initialState, { type, currency }) => {
  switch (type) {
    case CHANGE_CURRENCY:
      return { ...state, currency };

    default:
      return state;
  }
};
