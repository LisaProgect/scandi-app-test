import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard.component';
import { PricesType, AttributesType } from '../../type/ProductList';
import getFirstImage from '../../util/Image';
import getFirstAttributes from '../../util/Attributes';

export class ProductCardContainer extends PureComponent {
  static propTypes = {
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PricesType).isRequired,
    brand: PropTypes.string.isRequired,
    attributes: PropTypes.arrayOf(AttributesType).isRequired,
  };

  containerProps = () => {
    const { gallery, attributes } = this.props;
    return {
      srcImg: getFirstImage(gallery),
      firstAttribute: getFirstAttributes(attributes),
    };
  };

  render() {
    return <ProductCard {...this.props} {...this.containerProps()} />;
  }
}

export default ProductCardContainer;
