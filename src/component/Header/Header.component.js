/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../Menu';
import CurrencySwitcher from '../CurrencySwitcher';
import Logo from '../Logo';
import MinicartButton from '../MinicartButton';

import './Header.style.scss';

export class Header extends PureComponent {
  renderCurrency() {
    return <CurrencySwitcher />;
  }

  // renderMiniCart() {
  //   const countItems = 3;
  //   return (
  //     <div className="Header-MiniCartWrapper Header-MiniCartWrapper_isVisible">
  //       <div role="presentation" className="Header-MiniCartOutside" />
  //       <div className="CartOverlay">
  //         <div className="CartOverlay-CountItems">
  //           <span className="CartOverlay-CountName">My Bag, </span>
  //           {`${countItems} items`}
  //           <ul className="CartOverlay-Items">
  //             <li className="CartItem">
  //               <figure className="CartItem-Wrapper">
  //                 <figcaption className="CartItem-Content">hello</figcaption>
  //                 <a href="df" className="CartItem-PictureWrapper">
  //                   <img
  //                     className="CartItem-Picture"
  //                     src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg"
  //                     alt=""
  //                   />
  //                 </a>
  //               </figure>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <section className="Header-Wrapper">
        <header className="Header">
          <nav className="Header-Nav">
            <Menu />
            <Logo />
            <div className="Header-WrapperActions">
              {this.renderCurrency()}
              <MinicartButton miniCartItemsCount={3} />
            </div>
          </nav>
        </header>
      </section>
    );
  }
}

export default Header;
