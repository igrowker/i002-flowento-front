import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaBell,
  FaUser,
  FaHome,
  FaCalendar,
  FaList,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "/src/assets/logow.webp";
import avatar from "/src/assets/profile.webp";
import { BsArrowLeft } from "react-icons/bs";
import { logout } from "../../services/authService";
import { useUser } from "../../context/UserContext";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="relative font-bold font-lato">
      <div className="object-cover w-full h-16 rounded-b-3xl md:h-24 lg:h-25 bg-gradient-red"></div>

      {/* Logo */}
      <Link to="/event-list" className="absolute z-10 mt-6 transform -translate-x-1/2 left-1/2 top-1/3 sm:top-1/2 -translate-y-1/3">
        <img
          src={logo}
          alt="Logo"
          className="w-auto h-12 transition-transform duration-300 border-4 border-red-500 rounded-full shadow-lg hover:scale-110 sm:h-16 md:h-20 lg:h-24"
        />
      </Link>

      {/* Notification icon */}
      <button className="absolute top-6 md:top-8 right-8">
        <FaBell className="text-lg text-white transition-transform duration-300 sm:text-xl md:text-2xl lg:text-3xl hover:scale-125" />
      </button>

      {/* Menu toggle button */}
      <button
        className="absolute cursor-pointer top-6 md:top-8 left-5"
        onClick={toggleMenu}
      >
        <FaBars className="text-lg text-white transition-transform duration-300 sm:text-xl md:text-2xl lg:text-3xl hover:scale-125" />
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-9/20 md:w-2/5 bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } rounded-r-lg shadow-lg`}
      >
        <div className="flex flex-col h-full px-6 py-4 md:p-8">
          <button className="flex justify-end ml-40 md:ml-0 ">
            <BsArrowLeft
              className="text-2xl transition-transform duration-300 hover:scale-125 md:text-4xl text-orangeprimary hover:text-orange-600"
              onClick={toggleMenu}
            />
          </button>

          <div className="flex flex-col items-center mt-8">
            <img
              src={user?.avatar || avatar}
              alt="User"
              className="w-24 h-auto mb-4 border-2 border-gray-500 rounded-full "
            />
            <h2 className="text-sm font-semibold md:text-lg">
              {user
                ? `${user.first_name} ${user.last_name}`
                : "No disponible"}{" "}
            </h2>
          </div>

          <ul className="mt-6 space-y-4 text-xs md:text-lg md:mt-8">
            <li>
              <Link
                to="/input-perfil"
                className="flex items-center text-black hover:text-orange-600 "
              >
                <FaUser className="mr-2 text-orange-500" />
                Perfil
              </Link>
            </li>
            <li>
              <Link
                to="/event-list"
                className="flex items-center text-black hover:text-orange-600"
              >
                <FaHome className="mr-2 text-orange-500" />
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center text-black hover:text-orange-600"
              >
                <FaCalendar className="mr-2 text-orange-500" />
                Calendario
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center text-black hover:text-orange-600"
              >
                <FaList className="mr-2 text-orange-500" />
                Entradas
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center text-black hover:text-orange-600"
              >
                <FaCog className="mr-2 text-orange-500" />
                Configuración
              </Link>
            </li>
            <li>
              <Link
                onClick={handleLogout}
                className="flex items-center mb-8 text-black hover:text-orange-600"
              >
                <FaSignOutAlt className="mr-2 text-orange-500" />
                Cerrar sesión
              </Link>
            </li>
          </ul>
          {/* Footer logo */}
          <div className="flex justify-center mt-auto">
            <img src={logo} alt="Footer Logo" className="w-24 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
