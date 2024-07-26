import PropTypes from 'prop-types';
import { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  
  const updateEvents = () => {
  };

  return (
    <EventContext.Provider value={{ events, setEvents, updateEvents }}>
      {children}
    </EventContext.Provider>
  );
};

EventProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useEvents = () => useContext(EventContext);
