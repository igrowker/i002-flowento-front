import "./App.css";
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
import Index from "./components/Auth/Index";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = ["/", "/register", "/error"].includes(
    location.pathname.toLowerCase()
  );

  return (
    <div id="root">
      <main>
        {!hideNavbarAndFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/input-perfil" element={<InputPerfil />} />
          <Route path="/perfil-edit" element={<PerfilEdit />} />
          <Route path="/error" element={<Error />} />
          <Route path="/event-list" element={<EventList />} />
          <Route path="/event-approval" element={<EventApproval />} />
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
