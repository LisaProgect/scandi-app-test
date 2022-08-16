import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './Loader.style.scss';

export class Loader extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    size: 14,
  };

  render() {
    const { isLoading, size } = this.props;

    if (!isLoading) {
      return null;
    }

    return <div className="Loader" style={{ fontSize: `${size}px` }} />;
  }
}

export default Loader;
