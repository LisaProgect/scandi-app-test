import React, { Component } from 'react';

import { Logo, Arrow, EmptyCart } from '../Icons';
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { isVisibleCurrency: false };
  }

  onCurrencyClick = () => {
    this.setState((prevState) => ({
      isVisibleCurrency: !prevState.isVisibleCurrency,
    }));
  };

  renderMenuList() {
    return (
      <div className="Menu-MenuWrapper">
        <ul className="Menu-ItemList">
          <li className="Menu-Item Menu-Item_active">
            <a href="https\google" className="Menu-Link">
              Woman
            </a>
          </li>
          <li className="Menu-Item">
            <a href="https\google" className="Menu-Link">
              Men
            </a>
          </li>
          <li className="Menu-Item">
            <a href="https\google" className="Menu-Link">
              Kids
            </a>
          </li>
        </ul>
      </div>
    );
  }

  renderCurrency() {
    const { isVisibleCurrency } = this.state;

    return (
      <div className="CurrencySwitcher">
        <div
          className="CurrencySwitcher-Header"
          onClick={this.onCurrencyClick}
          onKeyPress={this.onCurrencyClick}
          role="button"
          tabIndex="0"
        >
          <span className="CurrencySwitcher-Current">$</span>
          <Arrow
            className={`ArrowIcon ${
              isVisibleCurrency && 'ArrowIcon_direction_top'
            }`}
          />
        </div>

        <ul
          role="menu"
          className={`CurrencySwitcher-ItemList ${
            isVisibleCurrency && 'CurrencySwitcher-ItemList_active'
          }`}
        >
          <li role="menuitem" className="CurrencySwitcher-Item">
            $ USD
          </li>
          <li role="menuitem" className="CurrencySwitcher-Item">
            $ USD
          </li>
          <li role="menuitem" className="CurrencySwitcher-Item">
            $ USD
          </li>
        </ul>
      </div>
    );
  }

  renderMiniCart() {
    const countItems = 3;
    return (
      <div className="Header-MiniCartWrapper Header-MiniCartWrapper_isVisible">
        <div role="presentation" className="Header-MiniCartOutside" />
        <div className="CartOverlay">
          <div className="CartOverlay-CountItems">
            <span className="CartOverlay-CountName">My Bag, </span>
            {`${countItems} items`}
            <ul className="CartOverlay-Items">
              <li className="CartItem">
                <figure className="CartItem-Wrapper">
                  <figcaption className="CartItem-Content">hello</figcaption>
                  <a href="df" className="CartItem-PictureWrapper">
                    <img
                      className="CartItem-Picture"
                      src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg"
                      alt=""
                    />
                  </a>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section className="Header-Wrapper">
        <header className="Header">
          <nav className="Header-Nav">
            {this.renderMenuList()}
            <a href="http" className="Header-LogoWrapper">
              <Logo />
            </a>
            <div className="Header-WrapperActions">
              {this.renderCurrency()}

              <button tabIndex={0} type="button" className="BasketWrapper">
                <EmptyCart />
                <span className="Basket-CounterProducts">3</span>
              </button>
            </div>
            {this.renderMiniCart()}
          </nav>
        </header>
      </section>
    );
  }
}
