import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ProductGallery from './ProductGallery.component';
import { UP, DOWN } from './ProductGallery.config';

export class ProductGalleryContainer extends PureComponent {
  static propTypes = {
    gallery: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    gallery: [],
  };

  state = {
    heightThumbnailImage: 0,
    heightThumbnailContainer: 0,
    offsetThumbnail: 0,
    isButtonUpShow: false,
    isButtonDownShow: false,
    currentSlider: '',
  };

  containerFunctions = {
    registerRefElement: this.registerRefElement.bind(this),
    onClickUp: this.handelOnClickUp.bind(this),
    onClickDown: this.handelOnClickDown.bind(this),
    onActiveImageChange: this.onActiveImageChange.bind(this),
  };

  componentDidMount() {
    const { gallery } = this.props;

    const [firstImage] = gallery;
    this.setState({ currentSlider: firstImage || '' });
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      heightThumbnailImage: prevHeightThumbnailImage,
      offsetThumbnail: prevOffsetThumbnail,
    } = prevState;

    const { heightThumbnailImage, offsetThumbnail } = this.state;

    if (
      prevHeightThumbnailImage !== heightThumbnailImage ||
      prevOffsetThumbnail !== offsetThumbnail
    ) {
      this.updateButtonsShow();
    }
  }

  onActiveImageChange(pathImage) {
    this.setState({ currentSlider: pathImage });
  }

  _getNumberThumbnails() {
    const { gallery } = this.props;
    const { heightThumbnailContainer, heightThumbnailImage } = this.state;

    const countGalleryElement = gallery.length;

    const thumbnailInContainer = Math.ceil(
      heightThumbnailContainer / heightThumbnailImage,
    );
    const thumbnailNotInContainer = countGalleryElement - thumbnailInContainer;

    return { thumbnailInContainer, thumbnailNotInContainer };
  }

  _handelButtonsClick(type) {
    const { heightThumbnailImage, offsetThumbnail } = this.state;

    if (type === UP) {
      this.setState({
        offsetThumbnail: offsetThumbnail - heightThumbnailImage,
      });
    }

    if (type === DOWN) {
      this.setState({
        offsetThumbnail: heightThumbnailImage + offsetThumbnail,
      });
    }
  }

  updateButtonsShow() {
    const { isButtonUpShow, isButtonDownShow } = this.isButtonsShow();

    this.setState({
      isButtonUpShow,
      isButtonDownShow,
    });
  }

  isButtonsShow() {
    const { offsetThumbnail, heightThumbnailImage } = this.state;
    const { thumbnailNotInContainer } = this._getNumberThumbnails();

    const maxHeightContainer = thumbnailNotInContainer * heightThumbnailImage;
    const minHeightContainer = 0;

    const isButtonDownShow =
      thumbnailNotInContainer > minHeightContainer &&
      offsetThumbnail < maxHeightContainer;

    const isButtonUpShow =
      thumbnailNotInContainer > 0 && offsetThumbnail > minHeightContainer;

    return { isButtonDownShow, isButtonUpShow };
  }

  handelOnClickDown() {
    return this._handelButtonsClick(DOWN);
  }

  handelOnClickUp() {
    return this._handelButtonsClick(UP);
  }

  registerRefElement(refs) {
    const { thumbnailRef, navigationSliderRef } = refs;
    this.setState({
      heightThumbnailImage: thumbnailRef,
      heightThumbnailContainer: navigationSliderRef,
    });
  }

  render() {
    return (
      <ProductGallery {...this.props} {...this.containerFunctions} {...this.state} />
    );
  }
}

export default ProductGalleryContainer;
