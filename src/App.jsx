import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EventList } from "./components/Events/EventList";
import Footer from "./components/Footer";
import EventApproval from "./components/Events/EventApproval";
import { Register } from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar/Navbar";
import InputLogin from "./components/Auth/InputLogin";

function App() {
  return (
    <Router>
      <>
      <Navbar />        
          <Routes>          
            <Route path="/" element={<InputLogin />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/event-list" element={<EventList />} />
            <Route path="/event-approval" element={<EventApproval />} />
          </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
