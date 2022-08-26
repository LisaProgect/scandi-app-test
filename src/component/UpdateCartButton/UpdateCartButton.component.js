import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';

export class UpdateCartButton extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onClickButton: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  };

  static defaultProps = {
    className: '',
    children: '',
  };

  render() {
    const { className, onClickButton, children } = this.props;

    const addToCartClass = classNames({ [className]: className });

    return (
      <button type="button" className={addToCartClass} onClick={onClickButton}>
        {children}
      </button>
    );
  }
}

export default UpdateCartButton;
