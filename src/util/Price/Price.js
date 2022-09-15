import TAX from './Price.config';

const getCurrentPrice = (currentCurrencySymbol, prices) => {
  const [currentItem] = prices.filter(
    ({ currency }) => currentCurrencySymbol === currency.symbol,
  );
  return currentItem;
};

const roundNumber = (number) => (Math.round(number * 100) / 100).toFixed(2);

const getTax = (price) => (price * TAX) / 100;

const addPrices = (curPrices, nextPrices) =>
  curPrices.map((curPrice) => {
    const { currency: curCurrency, amount: curAmount } = curPrice;

    const { amount } = nextPrices.find(
      ({ currency }) => currency.label === curCurrency.label,
    );

    return { currency: curCurrency, amount: amount + curAmount };
  });

const getUpdatePrices = (prices, qty) =>
  prices.map(({ amount, currency }) => {
    const newAmount = amount * qty;

    return {
      amount: newAmount,
      currency,
    };
  });

const getTotalPrice = (productsList) => {
  if (!productsList.length) {
    return [];
  }
  const [firstProduct, ...restProducts] = productsList;
  const { prices, qty } = firstProduct;

  const updatePrices = getUpdatePrices(prices, qty);

  return restProducts.length
    ? restProducts.reduce((acc, { prices: nextPrices, qty: nextQty }) => {
        const nextUpdatePices = getUpdatePrices(nextPrices, nextQty);
        return addPrices(acc, nextUpdatePices);
      }, updatePrices)
    : updatePrices;
};

export { getCurrentPrice, getTotalPrice, getTax, roundNumber };
