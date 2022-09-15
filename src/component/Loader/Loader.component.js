import PropTypes from 'prop-types';
import { PureComponent, createRef } from 'react';

import CSS from '../../util/CSS';

import './Loader.style.scss';

export class Loader extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    size: 14,
  };

  loaderRef = createRef();

  render() {
    const { isLoading, size } = this.props;

    if (!isLoading) {
      return null;
    }

    CSS.setVariable(this.loaderRef, 'font-size', `${size}px`);

    return <div className="Loader" ref={this.loaderRef} />;
  }
}

export default Loader;
