import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { PricesType } from '../../type/ProductList';
import ProductPrice from './ProductPrice.component';
import { getCurrentPrice, getTax, roundNumber } from '../../util/Price';

export class ProductPriceContainer extends PureComponent {
  static propTypes = {
    prices: PropTypes.arrayOf(PricesType).isRequired,
    currentCurrencySymbol: PropTypes.string.isRequired,
  };

  containerProps = () => {
    const {
      amount,
      currency: { symbol },
    } = this._getCurrentPrice();

    const tax = getTax(amount);

    return {
      amount: roundNumber(amount),
      symbol,
      tax: roundNumber(tax),
    };
  };

  _getCurrentPrice() {
    const { prices, currentCurrencySymbol } = this.props;
    return getCurrentPrice(currentCurrencySymbol, prices);
  }

  render() {
    return <ProductPrice {...this.containerProps()} {...this.props} />;
  }
}

export const mapStateToProps = (state) => ({
  currentCurrencySymbol: state.currency.currency,
});

export default connect(mapStateToProps)(ProductPriceContainer);
