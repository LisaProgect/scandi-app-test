import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import MinicartButton from './MinicartButton.component';
import parseSize from '../../util/CSS';

export class MinicartButtonContainer extends PureComponent {
  static propTypes = {
    miniCartItemsCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    colorMiniCart: PropTypes.bool,
    onMinicartButtonClick: PropTypes.func,
    sizeSVG: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    miniCartItemsCount: '',
    colorMiniCart: false,
    onMinicartButtonClick: () => {},
    sizeSVG: '20',
  };

  containerProps = () => ({
    ...this.props,
    sizeSVG: this._getCorrectSize(),
  });

  _getCorrectSize() {
    const { sizeSVG } = this.props;

    const { size } = parseSize(sizeSVG);
    return size;
  }

  render() {
    return <MinicartButton {...this.containerProps()} />;
  }
}

export default MinicartButtonContainer;
