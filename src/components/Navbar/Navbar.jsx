import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBell, FaTimes, FaUser, FaHome, FaCalendar, FaList, FaCog, FaSignOutAlt } from 'react-icons/fa';
import footerLogo from '/src/assets/Isotipo.png';
import logo from "/src/assets/logow.png";
// import { LuUser2 } from "react-icons/lu";
// import { BiHomeAlt2 } from "react-icons/bi";
// import { IoCalendarClearOutline } from "react-icons/io5";
// import { HiOutlineTicket } from "react-icons/hi";
// import { FiSettings } from "react-icons/fi";
// import { PiSignOutBold } from "react-icons/pi";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    axios({
      method: "GET",
      url: "http://localhost:8080/auth/logout",
      // url : "https://i002-flowento-back-1.onrender.com/auth/logout",
      withCredentials: true
    })
      .then((response) => {
        alert(response.data.payload);

        navigate('/');
      })
      .catch(function (error) {

        console.log(error);

        const { response } = error;
        const { data } = response;

        alert(data.payload);
      })
  }

  return (

    <div className="relative">
      <div className="w-full h-16 md:h-24 lg:h-25 bg-gradient-red object-cover rounded-b-lg"></div>

      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-1/3 sm:top-1/2 -translate-y-1/3 mt-6">
        <img src={logo} alt="Logo" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto rounded-full border-4 border-red-500 shadow-lg" />

      </div>

      {/* Notification icon */}
      <div className="absolute top-10 right-8">
        <FaBell className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl" />
      </div>

      {/* Menu toggle button */}
      <div className="absolute top-5 left-5 cursor-pointer" onClick={toggleMenu}>
        <FaBars className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl" />
      </div>

      {/* Expandable menu */}
      <div className={`fixed top-0 left-0 h-full w-9/20 md:w-2/5 bg-white z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} rounded-r-lg shadow-lg`}>
        <div className="flex flex-col h-full p-8">
          {/* Close button */}
          <div className="flex justify-end mb-4">
            <FaTimes className="text-xl text-black cursor-pointer" onClick={toggleMenu} />
          </div>

          {/* User profile image */}
          <div className="flex flex-col items-center mt-8">
            <img src="/src/assets/Foto perfil.png" alt="User" className="w-20 h-20 rounded-full mb-4" />
            <h2 className="text-lg font-semibold">José Flores</h2>
          </div>

          {/* Menu items */}
          <ul className="mt-8 space-y-4 font-lato">
            <li>
              <Link to="/input-perfil" className="flex items-center text-black">
                <FaUser className="mr-2 text-orange-500" />
                Perfil
              </Link>
            </li>

            <li>
              <a href="#" className="flex items-center text-black">
                <FaHome className="mr-2 text-orange-500" />
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-black">
                <FaCalendar className="mr-2 text-orange-500" />
                Calendario
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-black">
                <FaList className="mr-2 text-orange-500" />
                Entradas
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-black">
                <FaCog className="mr-2 text-orange-500" />
                Configuración
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-black mb-8">
                <FaSignOutAlt className="mr-2 text-orange-500" />
                Cerrar sesión
              </a>
            </li>
          </ul>

          {/* Footer logo */}
          <div className="flex justify-center mt-auto">
            <img src={footerLogo} alt="Footer Logo" className="w-24 h-auto" />
          </div>
        </div>
      </div>
    </div>
    // <nav className="rounded-b-full bg-gradient-red font-lato" >
    //   <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    //     <div className="relative flex items-center justify-between h-16">

    //       <div className="flex items-center">

    //             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //               <button
    //                 onClick={() => setIsOpen(!isOpen)}
    //                 className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:outline-none"
    //               >
    //                 {isOpen ? (
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     className="w-6 h-6"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       strokeWidth={2}
    //                       d="M6 18L18 6M6 6l12 12"
    //                     />
    //                   </svg>
    //                 ) : (
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     className="w-6 h-6"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       strokeWidth={2}
    //                       d="M4 6h16M4 12h16M4 18h16"
    //                     />
    //                   </svg>
    //                 )}
    //               </button>
    //             </div>

    //         <div className="hidden md:block">

    //           <div className="flex ml-10 space-x-4">

    //             <a href="/Event-List" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">Inicio</a>
    //             <a href="/Input-Perfil" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">Perfil</a>
    //             <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">Calendario</a>
    //             <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">Settings</a>
    //             {/* <a href="/" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">Salir</a> */}

    //             <button onClick={logout} className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">
    //                 Salir
    //             </button>


    //             <div >

    //             {/* <button type="button" class="relative rounded-full bg-inherit p-1 text-gray-400 hover:text-white  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">

    //                     <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    //                       <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    //                     </svg>
    //                   </button> */}


    //                </div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    //   {isOpen && (
    //     <div className="bg-white md:30">
    //       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    //       <div className="relative ml-3">
    //               <button
    //                  type="button"
    //                 className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    //                  id="user-menu-button"
    //                  aria-expanded="false"
    //                  aria-haspopup="true"
    //                >
    //                  <span className="absolute -inset-1.5"></span>
    //                  <span className="sr-only">Open user menu</span>
    //                  <img
    //                    className="w-8 h-8 rounded-full"
    //                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                    alt=""
    //                  />
    //                </button>
    //              </div>
    //         <a href="/event-list" className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><BiHomeAlt2 className='text-amber-400'/>-Inicio</a>
    //         <a href="/input-perfil" className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><LuUser2 className='text-amber-400 '/>-Perfil</a>
    //         <a href="#" className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><IoCalendarClearOutline className='text-amber-400'/>-Calendario</a>
    //         <a href="#" className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><FiSettings className='text-amber-400'/>-Settings</a>
    //         {/* <a href="#" className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><HiOutlineTicket className='text-amber-400'/>-Entradas</a> */}
    //       </div>
    //       <div>
    //       <a href="/" className="flex px-3 py-2 mt-20 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><PiSignOutBold className='text-amber-400'/>-Cerrar Sesión</a>
    //       <img className="w-auto h-10 ml-5 border rounded-full shadow-2xl" src={logow} alt="Flowento" />
    //       </div>
    //     </div>
    //   )}
    // </nav>
  );
};

export default NavBar;