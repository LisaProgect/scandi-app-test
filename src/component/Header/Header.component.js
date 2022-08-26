import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Menu from '../Menu';
import CurrencySwitcher from '../CurrencySwitcher';
import Logo from '../Logo';
import CartOverlay from '../CartOverlay';
import { CurrencyListType } from '../../type/Currency';

import './Header.style.scss';

export class Header extends PureComponent {
  static propTypes = {
    currencies: CurrencyListType.isRequired,
    categories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  };

  renderCurrency() {
    const { currencies } = this.props;

    return <CurrencySwitcher currencies={currencies} />;
  }

  renderCartOverlay() {
    return <CartOverlay />;
  }

  renderMenu() {
    const { categories } = this.props;

    return <Menu categories={categories} />;
  }

  renderContainer() {
    return (
      <section className="Header-Wrapper">
        <header className="Header">
          <nav className="Header-Nav">
            {this.renderMenu()}
            <Logo />
            <div className="Header-WrapperActions">
              {this.renderCurrency()}
              {this.renderCartOverlay()}
            </div>
          </nav>
        </header>
      </section>
    );
  }

  render() {
    return this.renderContainer();
  }
}

export default Header;
