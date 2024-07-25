import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppWrapper from "./App.jsx";
import { UserProvider } from "./context/UserContext"; 
import { EventProvider } from "./context/EventContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <EventProvider>
        <AppWrapper />
      </EventProvider>
    </UserProvider>
  </React.StrictMode>
);
