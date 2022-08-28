import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import classNames from 'classnames';

import { RefType } from '../../type/Common';

import './Image.style.scss';

export class Image extends PureComponent {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    imgRef: RefType,
  };

  static defaultProps = {
    className: '',
    src: '',
    alt: '',
    imgRef: () => {},
  };

  renderImage() {
    const { alt, src } = this.props;

    return <img className="Image-Image" src={src || ''} alt={alt} loading="lazy" />;
  }

  render() {
    const { className, imgRef } = this.props;
    const imageClassName = classNames('Image', { [className]: className });

    return (
      <div className={imageClassName} ref={imgRef}>
        {this.renderImage()}
      </div>
    );
  }
}

export default Image;
