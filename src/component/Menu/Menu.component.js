import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends PureComponent {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  };

  renderMenuItem(menu) {
    return menu.map(({ name }) => (
      <li className="Menu-Item" key={name}>
        <NavLink
          to={`/${name}`}
          className={
            ({ isActive }) =>
              // eslint-disable-next-line implicit-arrow-linebreak
              `${isActive ? 'Menu-Link Menu-LinkActive' : 'Menu-Link'}`
            // eslint-disable-next-line react/jsx-curly-newline
          }
        >
          {name}
        </NavLink>
      </li>
    ));
  }

  render() {
    const { menu } = this.props;

    return (
      <div className="Menu-MenuWrapper">
        <ul className="Menu-ItemList">{this.renderMenuItem(menu)}</ul>
      </div>
    );
  }
}

export default Menu;
