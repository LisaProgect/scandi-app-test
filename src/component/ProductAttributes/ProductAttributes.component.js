import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { AttributesType } from '../../type/ProductList';
import {
  TYPE_STYLE_LARGE,
  TYPE_SWITCHER_SWATCH,
  TYPE_SWITCHER_TEXT,
  SWATCH_CONFIG,
} from './ProductAttributes.config';

import './ProductAttributes.style.scss';

export class ProductAttributes extends PureComponent {
  static propTypes = {
    attributes: PropTypes.arrayOf(AttributesType),
    className: PropTypes.string,
    typeStyle: PropTypes.string,
    isSelected: PropTypes.func.isRequired,
    handelAttributeClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    attributes: [],
    className: '',
    typeStyle: TYPE_STYLE_LARGE,
  };

  renderItem = (children, item, className, code) => {
    const { value } = item;
    const { isSelected, handelAttributeClick } = this.props;

    const itemClassName = classNames(`ProductAttributeItem-${className}`, {
      active: isSelected(code, value),
    });

    return (
      <button
        key={value}
        className={itemClassName}
        onClick={() => handelAttributeClick(code, value)}
        type="button"
      >
        {children}
      </button>
    );
  };

  renderSwatchItem = (item, code) => {
    const { value, displayValue } = item;

    const borderColor =
      displayValue.toUpperCase() === SWATCH_CONFIG.color ? SWATCH_CONFIG.borderColor : '';

    return this.renderItem(
      <span style={{ backgroundColor: value, '--border-color': borderColor }} />,
      item,
      'Color',
      code,
    );
  };

  renderTextItem = (item, code) => {
    const { value } = item;

    return this.renderItem(<span>{value}</span>, item, 'Text', code);
  };

  renderItemsByType = (items, type, code) => {
    switch (type) {
      case TYPE_SWITCHER_SWATCH:
        return items.map((item) => this.renderSwatchItem(item, code));
      case TYPE_SWITCHER_TEXT:
        return items.map((item) => this.renderTextItem(item, code));
      default:
        return '';
    }
  };

  renderAttribute = (attribute) => {
    const { id, name, type, items } = attribute;
    const { typeStyle, className } = this.props;
    const attributeContainerClass = classNames(
      `ProductAttributes-Content ProductAttributes-Content__${typeStyle}`,
      {
        [className]: className,
      },
    );

    return (
      <article key={id} className={attributeContainerClass}>
        <div className="ProductAttribute-Label">{name}</div>
        <div className="ProductAttributes-Items">
          {this.renderItemsByType(items, type, id)}
        </div>
      </article>
    );
  };

  renderContainer() {
    const { attributes } = this.props;

    return (
      attributes && (
        <div className="ProductAttributes">{attributes.map(this.renderAttribute)}</div>
      )
    );
  }

  render() {
    return this.renderContainer();
  }
}

export default ProductAttributes;
