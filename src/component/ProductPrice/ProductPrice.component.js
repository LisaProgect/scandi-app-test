import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';

import './ProductPrice.style.scss';

export class ProductPrice extends PureComponent {
  static propTypes = {
    amount: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    className: PropTypes.string,
    isTax: PropTypes.bool,
    tax: PropTypes.number.isRequired,
  };

  static defaultProps = {
    className: '',
    isTax: false,
  };

  render() {
    const { amount, symbol, className, tax, isTax } = this.props;

    const productPriceClass = classNames('ProductPrice', {
      [className]: className,
    });

    return (
      <span className={productPriceClass}>{`${symbol}${isTax ? tax : amount}`}</span>
    );
  }
}

export default ProductPrice;
