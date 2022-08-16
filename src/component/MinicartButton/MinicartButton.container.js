import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import MinicartButton from './MinicartButton.component';

export class MinicartButtonContainer extends PureComponent {
  static propTypes = {
    miniCartItemsCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    colorMiniCart: PropTypes.bool,
    onMinicartButtonClick: PropTypes.func.isRequired,
    sizeSVG: PropTypes.shape({
      width: PropTypes.string,
      height: PropTypes.string,
    }),
  };

  static defaultProps = {
    miniCartItemsCount: false,
    colorMiniCart: false,
    sizeSVG: {
      width: '20',
      height: '20',
    },
  };

  render() {
    return <MinicartButton {...this.props} />;
  }
}

export default MinicartButtonContainer;
