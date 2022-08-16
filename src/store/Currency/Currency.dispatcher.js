import BrowserDatabase from '../../util/BrowserDatabase';
import { CURRENT_CURRENCY_ITEM } from './Currency.reducer';
import { changeCurrency } from './Currency.action';

export class CurrencyDispatcher {
  addCurrency(dispatch, currencyData) {
    const currentCurrency = BrowserDatabase.getItem(CURRENT_CURRENCY_ITEM);

    if (currentCurrency && currentCurrency.label === currencyData.label) {
      return;
    }

    BrowserDatabase.setItem(currencyData, CURRENT_CURRENCY_ITEM);
    dispatch(changeCurrency(currencyData));
  }
}

export default new CurrencyDispatcher();
