import BrowserDatabase from '../../util/BrowserDatabase';
import { CURRENT_CURRENCY_ITEM } from './Currency.reducer';
import { changeCurrency } from './Currency.action';

export class CurrencyDispatcher {
  addCurrency(dispatch, currencySymbol) {
    const currentCurrencySymbol = BrowserDatabase.getItem(CURRENT_CURRENCY_ITEM);

    if (currentCurrencySymbol === currencySymbol) {
      return;
    }

    BrowserDatabase.setItem(currencySymbol, CURRENT_CURRENCY_ITEM);
    dispatch(changeCurrency(currencySymbol));
  }
}

export default new CurrencyDispatcher();
