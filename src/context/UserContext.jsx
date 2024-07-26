import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        first_name: "Felipe",
        last_name: "Suarez",
        birthDate: "01/01/1990",
        phone: "123-456-7890",
        email: "felipe.suarez@gmail.com",
        address: "Valencia - España",
        position: "Web Developer",
        company: "Igrowker - Acelerando Juniors IT",
        information: "Aceleración de Talentos - Reclutamiento Inteligente - Primer Empleo IT - IT Training - Junior IT - IA - Sector Tecnológico - Desarrollo de Productos IT",
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
