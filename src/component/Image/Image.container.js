import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Image from './Image.component';
import parseSize from '../../util/CSS';

export class ImageContainer extends PureComponent {
  static propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    style: PropTypes.shape({}),
    width: PropTypes.string,
    height: PropTypes.string,
    alt: PropTypes.string,
  };

  static defaultProps = {
    src: '',
    alt: '',
    height: '',
    width: '',
    style: {},
  };

  containerProps = () => ({
    style: this._getStyle(),
  });

  _parseSize(sizeImage) {
    const { size, unit } = parseSize(sizeImage);
    if (!size) {
      return '100%';
    }
    return `${size}${unit}`;
  }

  _getCorrectSize() {
    const { width, height } = this.props;

    const correctHeight = this._parseSize(height);
    const correctWidth = this._parseSize(width);

    return { width: correctWidth, height: correctHeight };
  }

  _getStyle() {
    const { style } = this.props;
    return { ...this._getCorrectSize(), ...style };
  }

  render() {
    return <Image {...this.props} {...this.containerProps()} />;
  }
}

export default ImageContainer;
