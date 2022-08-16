import React, { PureComponent } from 'react';
// import PropTypes, { string } from 'prop-types';
// import { Query } from '@apollo/client/react/components';

import ProductListItem from '../../component/ProductListItem';
import './ProductListingPage.css';

export default class ProductListingPage extends PureComponent {
  render() {
    return <ProductListItem />;
  }
}

// ProductListingPage.propTypes = {
//   params: PropTypes.shape({ title: string }).isRequired,
// };
