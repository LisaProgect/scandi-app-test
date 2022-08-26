import { roundNumber } from '../Price';

export const getQtyProductsInCart = (productsList) =>
  !productsList.length
    ? 0
    : productsList.reduce((acc, { qty }) => acc + qty, 0);

const checkEveryAttributes = (attributes, options) =>
  Object.keys(options).every(
    (option) => attributes[option] && attributes[option] === options[option],
  );

const updatePrices = (prices, qty, curQty) =>
  prices.map(({ amount, currency }) => {
    const pricePerUnit = amount / qty;
    const newAmount = roundNumber(pricePerUnit * curQty);

    return {
      amount: newAmount,
      currency,
    };
  });

export const updateCartItems = (prevProducts, curProduct) => {
  if (!prevProducts.length) {
    return curProduct.qty > 0 ? [curProduct] : [];
  }

  const findSameProduct = prevProducts.filter(
    ({ id, selectedAttributes }) =>
      id === curProduct.id &&
      checkEveryAttributes(selectedAttributes, curProduct.selectedAttributes),
  );

  if (!findSameProduct.length) {
    return curProduct.qty > 0 ? [...prevProducts, curProduct] : prevProducts;
  }

  return prevProducts.reduce((acc, prevProduct) => {
    const { id, selectedAttributes, qty } = prevProduct;

    const checkAttr = checkEveryAttributes(
      selectedAttributes,
      curProduct.selectedAttributes,
    );

    if (id === curProduct.id && checkAttr) {
      const curQty = qty + curProduct.qty;
      const curPrices = updatePrices(prevProduct.prices, qty, curQty);

      return curQty > 0
        ? [...acc, { ...prevProduct, qty: curQty, prices: curPrices }]
        : acc;
    }

    return [...acc, prevProduct];
  }, []);
};
