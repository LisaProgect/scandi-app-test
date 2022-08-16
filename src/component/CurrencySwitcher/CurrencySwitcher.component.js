import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ClickOutside from '../ClickOutside';
import CurrencyItems from '../CurrencyItems';
import { CurrencyItemType } from '../../type/Currency';

import './CurrencySwitcher.style.scss';

export default class CurrencySwitcher extends PureComponent {
  static propTypes = {
    currencyList: PropTypes.arrayOf(CurrencyItemType).isRequired,
    isOpened: PropTypes.bool.isRequired,
    currentCurrencySymbol: PropTypes.string.isRequired,
    handleCurrencySelect: PropTypes.func.isRequired,
    onCurrencySwitcherClick: PropTypes.func.isRequired,
    onCurrencySwitcherOutsideClick: PropTypes.func.isRequired,
  };

  renderArrow() {
    const { isOpened } = this.props;
    const arrowClassName = classNames('ArrowIcon', { ArrowIcon_direction_top: isOpened });

    return (
      <svg
        className={arrowClassName}
        width="8"
        height="4"
        viewBox="0 0 8 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.5L4 3.5L7 0.5"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  renderCurrencyList = (item) => {
    const { handleCurrencySelect, currentCurrencySymbol } = this.props;
    const { label } = item;

    return (
      <CurrencyItems
        key={label}
        item={item}
        handleCurrencySelect={handleCurrencySelect}
        currentCurrencySymbol={currentCurrencySymbol}
      />
    );
  };

  renderCurrencySwitcher() {
    const {
      currencyList,
      onCurrencySwitcherOutsideClick,
      onCurrencySwitcherClick,
      isOpened,
      currentCurrencySymbol,
    } = this.props;

    const currencySwitcherClassName = classNames('CurrencySwitcher-ItemList', {
      'CurrencySwitcher-ItemList_active': isOpened,
    });
    return (
      <div className="CurrencySwitcher">
        <ClickOutside onClick={onCurrencySwitcherOutsideClick} show>
          <div
            className="CurrencySwitcher-Header"
            onClick={onCurrencySwitcherClick}
            onKeyPress={onCurrencySwitcherClick}
            role="button"
            tabIndex="0"
          >
            <span className="CurrencySwitcher-Current">{currentCurrencySymbol}</span>
            {this.renderArrow()}
          </div>

          <ul role="menu" className={currencySwitcherClassName}>
            {currencyList.map(this.renderCurrencyList)}
          </ul>
        </ClickOutside>
      </div>
    );
  }

  render() {
    const { currencyList } = this.props;

    if (currencyList.length <= 1) {
      return null;
    }

    return this.renderCurrencySwitcher();
  }
}
