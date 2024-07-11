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
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar/Navbar";
import InputLogin from "./components/Auth/InputLogin";
import Error from "./components/Error";
import PasswordReset from "./components/Auth/PasswordReset"
import InputPerfil from "./components/Auth/InputPerfil";
import PerfilEdit from "./components/Auth/PerfilEdit";



function App() {
  const location = useLocation();
  const hideNavbarAndFooter = ["/", "/login", "/register", "/error"].includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<InputLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/PasswordReset" element={<PasswordReset/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/InputPerfil" element={<InputPerfil/>}/>
        <Route path="/PerfilEdit" element={<PerfilEdit/>}/>
        <Route path="/error" element={<Error />} />
        <Route path="/event-list" element={<EventList />} />
        <Route path="/event-approval" element={<EventApproval />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
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
