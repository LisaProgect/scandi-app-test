import React, { PureComponent } from 'react';

import { ProductItemsType } from '../../type/ProductList';
import ProductCard from '../ProductCard';
import './ProductList.style.scss';

export default class ProductListItem extends PureComponent {
  static propTypes = {
    products: ProductItemsType,
  };

  static defaultProps = {
    products: [],
  };

  renderItems() {
    const { products } = this.props;

    if (products.length === 0) {
      return '';
    }

    return products.map((product) => <ProductCard key={product.id} {...product} />);
  }

  render() {
    return (
      <div className="ProductList">
        <ul className="ProductListPage">{this.renderItems()}</ul>
      </div>
    );
  }
}
