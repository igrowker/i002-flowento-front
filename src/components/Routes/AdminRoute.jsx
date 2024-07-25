import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const AdminRoute = ({ element, isAuthenticated, isAdmin }) => {
  return isAuthenticated && isAdmin ? element : <Navigate to="/" />;
};

AdminRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

export default AdminRoute;