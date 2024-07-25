import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default PrivateRoute;