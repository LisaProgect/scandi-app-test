import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import CartType from '../../type/Cart';
import ContentWrapper from '../../component/ContentWrapper';
import CartPageItem from '../../component/CartPageItem';
import ProductPrice from '../../component/ProductPrice';
import TAX from '../../util/Price/Price.config';

import './CartPage.style.scss';

export class CartPage extends PureComponent {
  static propTypes = {
    cartList: PropTypes.arrayOf(CartType),
    qtyProductInCart: PropTypes.number.isRequired,
    totalPrice: PropTypes.arrayOf(PropTypes.shape({})),
    onOrderClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    cartList: [],
    totalPrice: [],
  };

  renderTitle() {
    return <h2 className="CartPage-Title">cart</h2>;
  }

  renderCartPageItem(product) {
    const { selectedAttributes, id } = product;

    const key = `${id}${Object.values(selectedAttributes)}`;

    return <CartPageItem key={key} product={product} />;
  }

  renderCartPageItems() {
    const { cartList } = this.props;

    return <div className="CartPage-Items">{cartList.map(this.renderCartPageItem)}</div>;
  }

  renderTax() {
    const { totalPrice } = this.props;
    return (
      <li className="CartPage-InfoItem">
        <span className="CartPage-InfoItemLabel">Tax {TAX}%:</span>
        {!!totalPrice.length && (
          <ProductPrice prices={totalPrice} className="CartPage-InfoItemValue" isTax />
        )}
      </li>
    );
  }

  renderQtyProducts() {
    const { qtyProductInCart } = this.props;
    return (
      <li className="CartPage-InfoItem">
        <span className="CartPage-InfoItemLabel">Quantity:</span>
        <span className="CartPage-InfoItemValue">{qtyProductInCart}</span>
      </li>
    );
  }

  renderOrderButton() {
    const { onOrderClick, cartList } = this.props;
    return (
      !!cartList.length && (
        <button type="button" className="CartPage-OrderButton" onClick={onOrderClick}>
          Order
        </button>
      )
    );
  }

  renderTotalPrice() {
    const { totalPrice } = this.props;
    return (
      <li className="CartPage-InfoItem">
        <span className="CartPage-InfoItemLabel CartPage-TotalPrice">Total:</span>
        {!!totalPrice.length && (
          <ProductPrice prices={totalPrice} className="CartPage-InfoItemValue" />
        )}
      </li>
    );
  }

  renderOrderInfo() {
    return (
      <ul className="CartPage-OrderInfo">
        {this.renderTax()}
        {this.renderQtyProducts()}
        {this.renderTotalPrice()}
      </ul>
    );
  }

  renderContainer() {
    return (
      <ContentWrapper>
        {this.renderTitle()}
        {this.renderCartPageItems()}
        {this.renderOrderInfo()}
        {this.renderOrderButton()}
      </ContentWrapper>
    );
  }

  render() {
    return this.renderContainer();
  }
}

export default CartPage;
