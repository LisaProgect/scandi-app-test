/* eslint-disable consistent-return */
import BrowserDatabase from '../../util/BrowserDatabase';
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './Cart.action';

export const CART_LIST = 'cart_list';

const initialState = {
  cartList: BrowserDatabase.getItem(CART_LIST) || {},
};

const checkEveryAttributes = (attributes, options) =>
  Object.keys(options).every(
    (option) => attributes[option] && attributes[option] === options[option],
  );

const findAttribute = (prevAttributes, curAttribute) =>
  prevAttributes.find(({ items }) => checkEveryAttributes(items, curAttribute));

const getChangedAttributes = (curAttribute, prevAttributes) => {
  const findSameAttributes = findAttribute(prevAttributes, curAttribute.items);

  if (!findSameAttributes) {
    return [...prevAttributes, curAttribute];
  }

  return prevAttributes.map((attribute) =>
    checkEveryAttributes(attribute.items, curAttribute.items)
      ? { ...attribute, count: curAttribute.count + attribute.count }
      : attribute,
  );
};

const getChangedProductList = (state, newProduct) => {
  const { id, selectedAttributes } = newProduct;

  const { cartList } = state;

  const prevSelectedAttributes = cartList[id] ? cartList[id].selectedAttributes : [];

  cartList[id] = {
    ...newProduct,
    selectedAttributes: getChangedAttributes(selectedAttributes, prevSelectedAttributes),
  };

  BrowserDatabase.setItem(cartList, CART_LIST);

  return { cartList };
};

/* const updateProductList = {
  add: (productList, product) => {},
  remove: (productList, product) => {}
} */

const removeEmptyProduct = (state, product) => {
  const { cartList } = state;
  const { id } = product;

  if (!cartList[id]) {
    return { cartList };
  }
  const { cartList: updatedCartList } = getChangedProductList(state, product);

  const { selectedAttributes } = updatedCartList[id];

  const updateSelectedAttributes = selectedAttributes.filter(({ count }) => count !== 0);

  let updateProduct = {};
  if (updateSelectedAttributes.length) {
    updateProduct = {
      [id]: {
        ...product,
        selectedAttributes: updateSelectedAttributes,
      },
    };
  }

  const newCartList = Object.keys(cartList).reduce(
    (acc, productId) =>
      productId !== id
        ? { ...acc, [productId]: cartList[id] }
        : { ...acc, ...updateProduct },
    {},
  );

  BrowserDatabase.setItem(newCartList, CART_LIST);

  return { cartList: newCartList };
};

export default (state = initialState, actions) => {
  const { type } = actions;

  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return getChangedProductList(state, actions.newProduct);

    case REMOVE_PRODUCT_FROM_CART:
      return removeEmptyProduct(state, actions.product);

    default:
      return state;
  }
};
