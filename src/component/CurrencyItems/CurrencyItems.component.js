import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import classNames from 'classnames';

import './CurrencyItems.style.scss';
import { CurrencyItemType } from '../../type/Currency';

export class CurrencyItems extends PureComponent {
  static propTypes = {
    item: CurrencyItemType.isRequired,
    getCurrencyItem: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
  };

  render() {
    const {
      item: { label, symbol },
      getCurrencyItem,
      isSelected,
    } = this.props;

    const currencyClassNames = classNames('CurrencySwitcher-Item', {
      'CurrencySwitcher-Item_isActive': isSelected,
    });

    return (
      <li
        role="menuitem"
        className={currencyClassNames}
        onClick={getCurrencyItem}
        onKeyPress={getCurrencyItem}
      >
        {`${symbol} ${label}`}
      </li>
    );
  }
}

export default CurrencyItems;
