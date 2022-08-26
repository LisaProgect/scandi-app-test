import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyDispatcher from '../../store/Currency/Currency.dispatcher';
import { CurrencyListType } from '../../type/Currency';

import CurrencySwitcher from './CurrencySwitcher.component';

export class CurrencySwitcherContainer extends PureComponent {
  static propTypes = {
    setCurrency: PropTypes.func.isRequired,
    currentCurrencyCode: PropTypes.string.isRequired,
    currencies: CurrencyListType.isRequired,
  };

  state = {
    isOpened: false,
    currentCurrencySymbol: '',
    currencyList: [],
  };

  containerFunctions = {
    handleCurrencySelect: this.handleCurrencySelect.bind(this),
    onCurrencySwitcherClick: this.onCurrencySwitcherClick.bind(this),
    onCurrencySwitcherOutsideClick: this.onCurrencySwitcherOutsideClick.bind(this),
  };

  componentDidMount() {
    const { currentCurrencyCode, currencies } = this.props;
    this.setState({ currencyList: currencies });
    this.setState({ currentCurrencySymbol: currentCurrencyCode });
  }

  handleCurrencySelect(currencyItem) {
    const { setCurrency } = this.props;
    const { symbol } = currencyItem;

    setCurrency(symbol);

    this.setState({ currentCurrencySymbol: symbol, isOpened: false });
  }

  onCurrencySwitcherClick() {
    this.setState((state) => ({ isOpened: !state.isOpened }));
  }

  onCurrencySwitcherOutsideClick() {
    this.setState({ isOpened: false });
  }

  render() {
    return <CurrencySwitcher {...this.containerFunctions} {...this.state} />;
  }
}

export const mapStateToProps = (state) => ({
  currentCurrencyCode: state.CurrencyReducer.currency,
});

export const mapDispatchToProps = (dispatch) => ({
  setCurrency: (currency) => CurrencyDispatcher.addCurrency(dispatch, currency),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcherContainer);
