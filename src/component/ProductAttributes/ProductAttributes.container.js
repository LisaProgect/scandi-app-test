import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import ProductAttributes from './ProductAttributes.component';

export class ProductAttributesContainer extends PureComponent {
  static propTypes = {
    parameters: PropTypes.shape({}),
    updateParameters: PropTypes.func,
  };

  static defaultProps = {
    parameters: {},
    updateParameters: () => {},
  };

  containerFunctions = {
    isSelected: this.isSelected.bind(this),
    handelAttributeClick: this.handelAttributeClick.bind(this),
  };

  isSelected(code, value) {
    const { parameters } = this.props;
    const parameter = parameters[code];

    if (parameter) {
      return parameter === value;
    }

    return false;
  }

  handelAttributeClick(code, value) {
    const { updateParameters } = this.props;

    updateParameters(code, value);
  }

  render() {
    return <ProductAttributes {...this.props} {...this.containerFunctions} />;
  }
}

export default ProductAttributesContainer;
