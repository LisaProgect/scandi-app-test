import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';

import './AddToCartButton.style.scss';

export class AddToCartButton extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onClickAddToCart: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  };

  static defaultProps = {
    className: '',
    children: '',
  };

  render() {
    const { className, onClickAddToCart, children } = this.props;

    const addToCartClass = classNames('AddToCart', { [className]: className });

    return (
      <button type="button" className={addToCartClass} onClick={onClickAddToCart}>
        {children}
      </button>
    );
  }
}

export default AddToCartButton;
