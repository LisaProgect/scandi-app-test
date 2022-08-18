const getCurrentPrice = (currentCurrencySymbol, prices) => {
  const [currentItem] = prices.filter(
    ({ currency }) => currentCurrencySymbol === currency.symbol,
  );
  return currentItem;
};

const getTotalPrice = () => {};

export { getCurrentPrice, getTotalPrice };
