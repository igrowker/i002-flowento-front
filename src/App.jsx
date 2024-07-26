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
import { Register } from "./components/Auth/Register";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error";
import InputPerfil from "./components/Auth/InputPerfil";
import PerfilEdit from "./components/Auth/PerfilEdit";
import Login from "./components/Auth/Login";
import InputLogin from "./components/Auth/InputLogin";
import PasswordReset from "./components/Auth/PasswordReset";
import EventAdmin from "./components/Events/EventAdmin";
import EventDetail from "./components/Events/EventDetail";
import QRScanner from "./components/QR/QRScanner";
import Preloader from "./components/Preloader";
import EventForm from "./components/Events/EventForm";
// import Dashboard from "./components/Dashboard"

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = [
    "/",
    "/register",
    "/login",
    "/error",
    "/password-reset",
  ].includes(location.pathname.toLowerCase());

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    };

    checkAuthStatus();
  }, [user]);

  const handleLogin = async (email, password) => {
    try {
      const userData = await login(email, password);
      console.log("User data from login:", userData);
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
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleNavigateToReset = () => {};
  const handleNavigate = () => {};
  const handleClose = () => {};
  const handleSubmit = () => {};

  if (loading) {
    return <Preloader />;
  }

  return (
    <div id="root">
      <main>
        {!hideNavbarAndFooter && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={<InputLogin onLogin={handleLogin} />} />
          <Route path="/login" element={<Login onNavigateToReset={handleNavigateToReset} />} />
          <Route path="/password-reset" element={<PasswordReset onNavigate={handleNavigate} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/input-perfil" element={<InputPerfil />} />
          <Route path="/perfil-edit" element={<PerfilEdit onClose={handleClose} onSubmit={handleSubmit} />} />
          <Route path="/event-list" element={<EventList />} />
          <Route path="/event-detail/:id" element={<EventDetail />} />
          <Route path="/qrscanner/:id" element={<QRScanner />} />
          <Route path="/event-admin" element={<EventAdmin />} />
          <Route path="/event-form" element={<EventForm />} />
          {/* <Route path="/Dashboard" element={<Dashboard />} />  */}
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
