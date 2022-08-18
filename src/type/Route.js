import PropTypes from 'prop-types';

const RouteType = PropTypes.shape({
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.oneOf([null]),
  }),
  navigate: PropTypes.func,
  params: PropTypes.objectOf(PropTypes.string),
});

export default RouteType;
