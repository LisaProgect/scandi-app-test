import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import classNames from 'classnames';

import { PricesType } from '../../type/ProductList';
import ProductPrice from '../ProductPrice';
import Image from '../Image';
import MinicartButton from '../MinicartButton';

import './ProductCard.style.scss';

export class ProductCard extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PricesType).isRequired,
    srcImg: PropTypes.string.isRequired,
  };

  renderButtonCart() {
    const { inStock } = this.props;

    if (inStock) {
      return (
        <div className="ProductCard-Button">
          <MinicartButton colorMiniCart sizeSVG={24} />
        </div>
      );
    }
    return '';
  }

  renderProductContent() {
    const { prices, name, inStock } = this.props;

    const productContentClass = classNames('ProductCard-Content', {
      'ProductCard-Content_inStock': !inStock,
    });

    return (
      <div className={productContentClass}>
        {this.renderButtonCart()}
        <p className="ProductCard-Name">{name}</p>
        {inStock}
        <ProductPrice prices={prices} className="ProductCard-Price" />
      </div>
    );
  }

  renderOverlayStock() {
    const { inStock } = this.props;
    return (
      !inStock && (
        <>
          <div className="ProductCard-OverlayStock" />
          <p className="ProductCard-OverlayStockTitle">OUT OF STOCK</p>
        </>
      )
    );
  }

  renderProductImage() {
    const { srcImg, name } = this.props;

    return (
      <figure className="ProductCard-Figure">
        <Image src={srcImg} alt={name} height="330px" className="ProductCard-Image" />
        {this.renderOverlayStock()}
      </figure>
    );
  }

  render() {
    const { id } = this.props;

    return (
      <li className="ProductCard">
        <Link to={`/pd/${id}`} className="ProductCard-Link">
          {this.renderProductImage()}
          {this.renderProductContent()}
        </Link>
        <Outlet />
      </li>
    );
  }
}

export default ProductCard;
