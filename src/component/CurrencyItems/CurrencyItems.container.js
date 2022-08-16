import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import CurrencyItems from './CurrencyItems.component';
import { CurrencyItemType } from '../../type/Currency';

export class CurrencyItemsContainer extends PureComponent {
  static propTypes = {
    item: CurrencyItemType.isRequired,
    handleCurrencySelect: PropTypes.func.isRequired,
    currentCurrencySymbol: PropTypes.string.isRequired,
  };

  containerFunctions = {
    getCurrencyItem: this.getCurrencyItem.bind(this),
  };

  state = {
    isSelected: false,
  };

  componentDidMount() {
    this.changeState();
  }

  componentDidUpdate(prevProps) {
    const { currentCurrencySymbol: prevSymbol } = prevProps;
    const { currentCurrencySymbol } = this.props;

    if (prevSymbol !== currentCurrencySymbol) {
      this.changeState();
    }
  }

  getCurrencyItem() {
    const {
      item: { label, symbol },
      handleCurrencySelect,
    } = this.props;

    handleCurrencySelect({ label, symbol });
  }

  containerProps = () => {
    const { item } = this.props;
    return { item };
  };

  changeState() {
    const {
      currentCurrencySymbol,
      item: { symbol },
    } = this.props;

    if (symbol === currentCurrencySymbol) {
      this.setState({ isSelected: true });
    } else {
      this.setState({ isSelected: false });
    }
  }

  render() {
    return (
      <CurrencyItems
        {...this.containerProps()}
        {...this.containerFunctions}
        {...this.state}
      />
    );
  }
}

export default CurrencyItemsContainer;
