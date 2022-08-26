import React, { PureComponent } from 'react';

import CartType from '../../type/Cart';
import CartPageItem from './CartPageItem.component';

export class CartPageItemContainer extends PureComponent {
  static propTypes = {
    product: CartType.isRequired,
  };

  state = {
    widthImage: 0,
    offsetImage: 0,
  };

  containerFunctions = {
    registerRef: this.registerRef.bind(this),
    onClickButtonNext: this.onClickButtonNext.bind(this),
    onClickButtonPrev: this.onClickButtonPrev.bind(this),
  };

  onClickButtonNext() {
    const { widthImage, offsetImage } = this.state;
    const {
      product: { gallery },
    } = this.props;

    const maxOffsetImage = gallery.length * widthImage;
    const widthNextImage = offsetImage + widthImage;
    const nextOffsetImage = maxOffsetImage <= widthNextImage ? 0 : widthNextImage;

    this.setState({ offsetImage: nextOffsetImage });
  }

  onClickButtonPrev() {
    const { widthImage, offsetImage } = this.state;
    const {
      product: { gallery },
    } = this.props;

    const maxOffsetImage = gallery.length * widthImage;
    const widthNextImage = offsetImage - widthImage;
    const nextOffsetImage =
      widthNextImage <= 0 ? maxOffsetImage - widthImage : widthNextImage;

    this.setState({ offsetImage: nextOffsetImage });
  }

  registerRef(ref) {
    this.setState({ widthImage: ref.current.clientWidth });
  }

  render() {
    return <CartPageItem {...this.props} {...this.containerFunctions} {...this.state} />;
  }
}

export default CartPageItemContainer;
