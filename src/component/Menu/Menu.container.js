import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Menu from './Menu.component';

import './Menu.style.scss';

export class MenuContainer extends PureComponent {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  };

  render() {
    return <Menu {...this.props} />;
  }
}

export default MenuContainer;
