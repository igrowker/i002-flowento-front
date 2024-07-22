import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import InputPerfil from "../components/InputPerfil";
import EventList from "../components/EventList";
import EventApproval from "../components/EventApproval";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const authenticated = true;
      const admin = true;

      setIsAuthenticated(authenticated);
      setIsAdmin(admin);
    };

    checkAuthStatus();
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/input-perfil"
        element={
          <PrivateRoute
            component={InputPerfil}
            isAuthenticated={isAuthenticated}
          />
        }
      />

      <Route
        path="/event-list"
        element={
          <PrivateRoute element={EventList} isAuthenticated={isAuthenticated} />
        }
      />

      <Route
        path="/event-approval"
        element={
          <AdminRoute
            element={EventApproval}
            isAuthenticated={isAuthenticated}
            isAdmin={isAdmin}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
