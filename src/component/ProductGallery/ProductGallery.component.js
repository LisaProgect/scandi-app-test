import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';
import SliderButton from '../SliderButton';

import './ProductGallery.style.scss';

export class ProductGallery extends PureComponent {
  static propTypes = {
    gallery: PropTypes.arrayOf(PropTypes.string),
    registerRefElement: PropTypes.func.isRequired,
    offsetThumbnail: PropTypes.number,
    onClickUp: PropTypes.func.isRequired,
    onClickDown: PropTypes.func.isRequired,
    isButtonUpShow: PropTypes.bool.isRequired,
    isButtonDownShow: PropTypes.bool.isRequired,
    onActiveImageChange: PropTypes.func.isRequired,
    currentSlider: PropTypes.string.isRequired,
  };

  static defaultProps = {
    gallery: [],
    offsetThumbnail: 0,
  };

  thumbnailRef = createRef();

  navigationSliderRef = createRef();

  componentDidMount() {
    const { gallery, registerRefElement } = this.props;

    let refs = { thumbnailRef: 0, navigationSliderRef: 0 };

    if (gallery.length) {
      refs = {
        thumbnailRef: this.thumbnailRef.current.clientHeight,
        navigationSliderRef: this.navigationSliderRef.current.clientHeight,
      };
    }

    registerRefElement(refs);
  }

  renderThumbnail = (pathImage) => {
    const { onActiveImageChange } = this.props;
    return (
      <button
        key={pathImage}
        className="NavigationSlider-ThumbnailImage"
        type="button"
        ref={this.thumbnailRef}
        onClick={() => onActiveImageChange(pathImage)}
      >
        <Image src={pathImage} className="ProductGallery-ThumbnailImage" />
      </button>
    );
  };

  renderThumbnailButtons(children) {
    const { onClickUp, onClickDown, isButtonUpShow, isButtonDownShow } = this.props;

    return (
      <>
        <SliderButton
          onClickButton={onClickUp}
          angelRotation={90}
          className="SliderButton__up"
          isShow={isButtonUpShow}
        />
        {children}
        <SliderButton
          onClickButton={onClickDown}
          angelRotation={-90}
          className="SliderButton__down"
          isShow={isButtonDownShow}
        />
      </>
    );
  }

  renderSlider() {
    const { currentSlider } = this.props;
    return (
      <div className="Slider">
        <Image src={currentSlider} className="Slider-Image" />
      </div>
    );
  }

  renderThumbnails() {
    const { gallery, offsetThumbnail } = this.props;

    return (
      <div className="NavigationSlider-Thumbnails">
        {this.renderThumbnailButtons(
          <div className="NavigationSlider-Wrapper" ref={this.navigationSliderRef}>
            <div
              className="NavigationSlider"
              style={{
                '--translateY': `${-offsetThumbnail}px`,
                '--animation-speed': '400ms',
              }}
            >
              {gallery && gallery.map(this.renderThumbnail)}
            </div>
          </div>,
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="ProductGallery">
        {this.renderThumbnails()}
        {this.renderSlider()}
      </div>
    );
  }
}

export default ProductGallery;
