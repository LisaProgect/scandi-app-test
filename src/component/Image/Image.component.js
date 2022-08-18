import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './Image.style.scss';

export class Image extends PureComponent {
  static propTypes = {
    src: PropTypes.string,
    style: PropTypes.shape({
      width: PropTypes.string,
      height: PropTypes.string,
    }),
    alt: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    src: '',
    alt: '',
    style: {},
  };

  renderImage() {
    const { alt, src, style } = this.props;

    return (
      <img
        className="Image-Image"
        src={src || ''}
        alt={alt}
        style={style}
        loading="lazy"
      />
    );
  }

  render() {
    const { className } = this.props;

    return (
      <div className={`Image ${className}`}>
        {this.renderImage()}
      </div>
    );
  }
}

export default Image;
