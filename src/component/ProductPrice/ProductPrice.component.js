import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './ProductPrice.style.scss';

export class ProductPrice extends PureComponent {
  static propTypes = {
    amount: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { amount, symbol, className } = this.props;
    return <span className={`ProductPrice ${className}`}>{`${symbol}${amount}`}</span>;
  }
}

export default ProductPrice;
