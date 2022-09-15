import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ProductItemsType } from '../../type/ProductList';
import ContentWrapper from '../../component/ContentWrapper';
import ProductList from '../../component/ProductList';

import './ProductListingPage.style.scss';

export class ProductListingPage extends PureComponent {
  static propTypes = {
    products: ProductItemsType,
    categoryTitle: PropTypes.string,
  };

  static defaultProps = {
    products: [],
    categoryTitle: '',
  };

  _normalizeTitle(title) {
    const firstLetter = title[0];

    const firstLetterCap = firstLetter.toUpperCase();

    const remainingLetters = title.slice(1).toLowerCase();

    return `${firstLetterCap}${remainingLetters}`;
  }

  renderCategoryTitle() {
    const { categoryTitle } = this.props;

    let title = categoryTitle;

    if (categoryTitle) {
      title = this._normalizeTitle(categoryTitle);
    }

    return <h1 className="ProductListing-Title">{title}</h1>;
  }

  renderProductList() {
    const { products } = this.props;
    return <ProductList products={products} />;
  }

  render() {
    return (
      <ContentWrapper>
        {this.renderCategoryTitle()}
        {this.renderProductList()}
      </ContentWrapper>
    );
  }
}

export default ProductListingPage;
