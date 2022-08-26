import TAX from './Price.config';

const getCurrentPrice = (currentCurrencySymbol, prices) => {
  const [currentItem] = prices.filter(
    ({ currency }) => currentCurrencySymbol === currency.symbol,
  );
  return currentItem;
};

const roundNumber = (number) => Math.round(number * 100) / 100;

const getTax = (price) => roundNumber((price * TAX) / 100);

const addPrices = (curPrices, nextPrices) =>
  curPrices.map((curPrice) => {
    const { currency: curCurrency, amount: curAmount } = curPrice;

    const { amount } = nextPrices.find(
      ({ currency }) => currency.label === curCurrency.label,
    );

    return { currency: curCurrency, amount: roundNumber(amount + curAmount) };
  });

const getTotalPrice = (productsList) => {
  if (!productsList.length) {
    return [];
  }
  const [firstProduct, ...restProducts] = productsList;
  const { prices } = firstProduct;

  return restProducts.length
    ? restProducts.reduce(
        (acc, { prices: nextPrices }) => addPrices(acc, nextPrices),
        prices,
      )
    : prices;
};

export { getCurrentPrice, getTotalPrice, getTax, roundNumber };
