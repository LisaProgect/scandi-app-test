import PropTypes from 'prop-types';
import { AttributesType, PricesType } from './ProductList';

const CartType = PropTypes.shape({
  id: PropTypes.string,
  attributes: PropTypes.arrayOf(AttributesType),
  brand: PropTypes.string,
  gallery: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  qty: PropTypes.number,
  prices: PropTypes.arrayOf(PricesType),
  selectedAttributes: PropTypes.shape({}),
});

export default CartType;
