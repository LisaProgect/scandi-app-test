import PropTypes from 'prop-types';
import { createRef, PureComponent } from 'react';

import { ChildrenType } from '../../type/Common';

export class ClickOutside extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    show: PropTypes.bool,
    children: ChildrenType,
  };

  static defaultProps = {
    onClick: () => {},
    children: [],
    show: false,
  };

  constructor(props) {
    super(props);

    this.ref = createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = ({ target }) => {
    const { onClick } = this.props;

    if (this.ref.current && !this.ref.current.contains(target)) {
      onClick();
    }
  };

  render() {
    const { children, show } = this.props;

    if (!show) {
      return null;
    }

    return <div ref={this.ref}>{children}</div>;
  }
}

export default ClickOutside;
