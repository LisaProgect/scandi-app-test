import PropTypes from 'prop-types';

const CurrencyItemType = PropTypes.shape({
  label: PropTypes.string,
  symbol: PropTypes.string,
});

const CurrencyListType = PropTypes.arrayOf(CurrencyItemType);

export { CurrencyItemType, CurrencyListType };
