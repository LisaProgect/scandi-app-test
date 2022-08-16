import { PureComponent } from 'react';

import ChildrenType from '../../type/Common';

import './ContentWrapper.style.scss';

export class ContentWrapper extends PureComponent {
  static propTypes = {
    children: ChildrenType,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return <section className="ContentWrapper">{children}</section>;
  }
}

export default ContentWrapper;
