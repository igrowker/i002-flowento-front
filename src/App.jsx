import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EventList } from "./components/Events/EventList";
import Footer from "./components/Footer";
import EventApproval from "./components/Events/EventApproval";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/event-list" element={<EventList />} />
          <Route path="/event-approval" element={<EventApproval />} /> 
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
