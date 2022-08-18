import PropTypes from 'prop-types';

const PricesType = PropTypes.shape({
  amount: PropTypes.number,
  currency: PropTypes.shape({
    label: PropTypes.string,
    symbol: PropTypes.string,
  }),
});

const AttributeType = PropTypes.shape({
  displayValue: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
});

const AttributesType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  items: PropTypes.arrayOf(AttributeType),
});

const ProductType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  inStock: PropTypes.bool,
  gallery: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  category: PropTypes.string,
  attributes: PropTypes.arrayOf(AttributesType),
  prices: PropTypes.arrayOf(PricesType),
  brand: PropTypes.string,
});

const ProductItemType = PropTypes.shape({
  gallery: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
  inStock: PropTypes.bool,
  name: PropTypes.string,
  prices: PropTypes.arrayOf(PricesType),
});

const ProductItemsType = PropTypes.arrayOf(ProductItemType);

export {
  ProductItemsType,
  ProductItemType,
  PricesType,
  ProductType,
  AttributesType,
  AttributeType,
};
