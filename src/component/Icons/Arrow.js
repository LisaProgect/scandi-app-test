import React from 'react';
import PropTypes from 'prop-types';

export default function Arrow({ className = '' }) {
  return (
    <svg
      className={className}
      width="8"
      height="4"
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0.5L4 3.5L7 0.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Arrow.propTypes = {
  className: PropTypes.string,
};

Arrow.defaultProps = {
  className: '',
};
