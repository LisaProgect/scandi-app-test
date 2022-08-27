import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.style.scss';

class Menu extends PureComponent {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  };

  renderMenuItem(menu) {
    return menu.map(({ name }) => (
      <li className="Menu-Item" key={name}>
        <NavLink
          to={`/${name}`}
          className={({ isActive }) =>
            `${isActive ? 'Menu-Link Menu-LinkActive' : 'Menu-Link'}`
          }
        >
          {name}
        </NavLink>
      </li>
    ));
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="Menu-MenuWrapper">
        <ul className="Menu-ItemList">{this.renderMenuItem(categories)}</ul>
      </div>
    );
  }
}

export default Menu;
