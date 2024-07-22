import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
import EventDetail from "./components/Events/EventDetail";
import QRScanner from "./components/QR/QRScanner";
import QRDisplayView from "./components/QR/QRDisplayView";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = ["/", "/register", "/login", "/error", "/password-reset", "*"].includes(
    location.pathname.toLowerCase()
  );

  return (
    <div id="root">
      <main>
        {!hideNavbarAndFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<InputLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/input-perfil" element={<InputPerfil />} />
          <Route path="/perfil-edit" element={<PerfilEdit />} />
          <Route path="/event-list" element={<EventList />} />
          <Route path="/event-approval" element={<EventApproval />} />
          <Route path="/event-detail" element={<EventDetail />} />
          <Route path="/qr" element={<QRScanner />} />
          <Route path="/qr-display-view" element={<QRDisplayView />} />
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
