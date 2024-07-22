import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const AdminRoute = ({ component: Component, isAuthenticated, isAdmin }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return isAdmin ? <Component /> : <Navigate to="/" />;
};

AdminRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default AdminRoute;
