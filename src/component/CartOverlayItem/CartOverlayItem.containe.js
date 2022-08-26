import React, { PureComponent } from 'react';

import CartOverlayItem from './CartOverlayItem.component';

export class CartOverlayItemContaine extends PureComponent {
  render() {
    return <CartOverlayItem {...this.props} />;
  }
}

export default CartOverlayItemContaine;
