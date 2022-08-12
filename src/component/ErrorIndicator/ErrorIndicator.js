import React, { PureComponent } from 'react';

import './ErrorIndicator.css';

export default class ErrorIndicator extends PureComponent {
  render() {
    return (
      <div className="ErrorIndicator">
        <span className="Boom">BOOM!</span>
        <span>something has gone terribly wrong</span>
        <span>(but we already fix it)</span>
      </div>
    );
  }
}
