import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        first_name: "John",
        last_name: "Doe",
        birthDate: "01/01/1990",
        phone: "123-456-7890",
        email: "john.doe@example.com",
        address: "123 Main St",
        position: "Developer",
        company: "Tech Company",
        information: "Some information",
        avatar: "",
      });
    }, 1000);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(UserContext);
