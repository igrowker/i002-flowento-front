import { Route, Routes } from "react-router-dom";
import InputPerfil from "../components/InputPerfil";
import EventList from "../components/EventList";
import EventApproval from "../components/EventApproval";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import { useEffect, useState } from "react";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (token) {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.ok) {
            const user = await response.json();
            setIsAuthenticated(true);
            setIsAdmin(user.role === "admin");
          } else {
            setIsAuthenticated(false);
            setIsAdmin(false);
          }
        } else {
          setIsAuthenticated(false);
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
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
            element={<InputPerfil />}
            isAuthenticated={isAuthenticated}
          />
        }
      />
      <Route
        path="/event-list"
        element={
          <PrivateRoute 
            element={<EventList />} 
            isAuthenticated={isAuthenticated} 
          />
        }
      />
      <Route
        path="/event-approval"
        element={
          <AdminRoute
            element={<EventApproval />}
            isAuthenticated={isAuthenticated}
            isAdmin={isAdmin}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
