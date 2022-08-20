import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Image from './Image.component';

export class ImageContainer extends PureComponent {
  static propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    alt: PropTypes.string,
  };

  static defaultProps = {
    src: '',
    alt: '',
  };

  render() {
    return <Image {...this.props} />;
  }
}

export default ImageContainer;
