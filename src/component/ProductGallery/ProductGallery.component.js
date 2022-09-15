import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';
import SliderButton from '../SliderButton';
import CSS from '../../util/CSS';
import { ANIMATION_SPEED } from './ProductGallery.config';

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
    inStock: PropTypes.bool.isRequired,
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
          rotation="Up"
          className="SliderButton__up"
          isShow={isButtonUpShow}
        />
        {children}
        <SliderButton
          onClickButton={onClickDown}
          rotation="Down"
          className="SliderButton__down"
          isShow={isButtonDownShow}
        />
      </>
    );
  }

  renderOverlayStock() {
    const { inStock } = this.props;
    return (
      !inStock && (
        <div className="Slider-Overlay">
          <p className="Slider-OverlayTitle">OUT OF STOCK</p>
        </div>
      )
    );
  }

  renderSlider() {
    const { currentSlider } = this.props;
    return (
      <div className="Slider">
        {this.renderOverlayStock()}
        <Image src={currentSlider} className="Slider-Image" />
      </div>
    );
  }

  renderThumbnails() {
    const { gallery, offsetThumbnail } = this.props;
    CSS.setVariable(this.navigationSliderRef, 'translateY', `${-offsetThumbnail}px`);
    CSS.setVariable(this.navigationSliderRef, 'animation-speed', ANIMATION_SPEED);

    return (
      <div className="NavigationSlider-Thumbnails">
        {this.renderThumbnailButtons(
          <div className="NavigationSlider-Wrapper" ref={this.navigationSliderRef}>
            <div className="NavigationSlider">
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
