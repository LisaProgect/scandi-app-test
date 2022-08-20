import PropTypes from 'prop-types';

const RefType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
]);

const ChildrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

export { ChildrenType, RefType };
