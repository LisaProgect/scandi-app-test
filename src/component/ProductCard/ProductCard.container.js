import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard.component';
import { PricesType } from '../../type/ProductList';
import getFirstImage from '../../util/Image';

export class ProductCardContainer extends PureComponent {
  static propTypes = {
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PricesType).isRequired,
    brand: PropTypes.string.isRequired,
  };

  containerProps = () => {
    const { id, inStock, name, prices, gallery } = this.props;
    return {
      id,
      inStock,
      name,
      prices,
      srcImg: getFirstImage(gallery),
    };
  };

  render() {
    return <ProductCard {...this.props} {...this.containerProps()} />;
  }
}

export default ProductCardContainer;
