import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { login, register, logout } from "./services/authService";
import { EventList } from "./components/Events/EventList";
import Footer from "./components/Footer";
import EventApproval from "./components/Events/EventApproval";
import { Register } from "./components/Auth/Register";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error";
import InputPerfil from "./components/Auth/InputPerfil";
import PerfilEdit from "./components/Auth/PerfilEdit";
import Login from "./components/Auth/Login";
import InputLogin from "./components/Auth/InputLogin";
import PasswordReset from "./components/Auth/PasswordReset";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AdminRoute from "./components/Routes/AdminRoute";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = [
    "/",
    "/register",
    "/login",
    "/error",
    "/password-reset",
    "*",
  ].includes(location.pathname.toLowerCase());

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      if (user) {
        setIsAdmin(user.isAdmin);
      }
    };

    checkAuthStatus();
  }, [user]);

  const handleLogin = async (email, password) => {
    try {
      const userData = await login(email, password);
      setUser(userData);
      navigate("/event-list");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleRegister = async (userData) => {
    try {
      const newUser = await register(userData);
      setUser(newUser);
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleNavigateToReset = () => {};
  const handleNavigate = () => {};
  const handleClose = () => {};
  const handleSubmit = () => {};

  useEffect(() => {
    console.log("User state:", user);
  }, [user]);

  return (
    <div id="root">
      <main>
        {!hideNavbarAndFooter && <Navbar user={user} onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={<InputLogin onLogin={handleLogin} />} />
          <Route
            path="/login"
            element={<Login onNavigateToReset={handleNavigateToReset} />}
          />
          <Route
            path="/password-reset"
            element={<PasswordReset onNavigate={handleNavigate} />}
          />
          <Route
            path="/register"
            element={<Register onRegister={handleRegister} />}
          />
          <Route
            path="/input-perfil"
            element={
              <PrivateRoute component={InputPerfil} isAuthenticated={!!user} />
            }
          />
          <Route
            path="/perfil-edit"
            element={
              <PerfilEdit onClose={handleClose} onSubmit={handleSubmit} />
            }
          />
          <Route
            path="/event-list"
            element={
              <PrivateRoute component={EventList} isAuthenticated={!!user} />
            }
          />
          <Route
            path="/event-approval"
            element={
              <AdminRoute
                component={EventApproval}
                isAuthenticated={!!user}
                isAdmin={isAdmin}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
