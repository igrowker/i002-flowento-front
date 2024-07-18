import { useState } from 'react';
import "tailwindcss/tailwind.css";
import logow from "../../assets/logow.png";
import { LuUser2 } from "react-icons/lu";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { PiSignOutBold } from "react-icons/pi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logout = ()=>{
    axios({
      method: "GET",
      url: "http://localhost:8080/auth/logout",
      // url : "https://i002-flowento-back-1.onrender.com/auth/logout",
      withCredentials : true
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
    <nav className="rounded-b-full bg-gradient-red font-lato" >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          
          <div className="flex items-center">
            
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:outline-none"
                  >
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>

            <div className="hidden md:block">
             
              <div className="flex ml-10 space-x-4">
              
                <a href="/Event-List" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">Inicio</a>
                <a href="/Input-Perfil" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">Perfil</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">Calendario</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">Settings</a>
                {/* <a href="/" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">Salir</a> */}
                
                <button onClick={logout} className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary">
                    Salir
                </button>
              

                <div >

                {/* <button type="button" class="relative rounded-full bg-inherit p-1 text-gray-400 hover:text-white  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                      </button> */}

                          
                   </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {isOpen && (
        <div className="bg-white md:30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="relative ml-3">
                  <button
                     type="button"
                    className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                     id="user-menu-button"
                     aria-expanded="false"
                     aria-haspopup="true"
                   >
                     <span className="absolute -inset-1.5"></span>
                     <span className="sr-only">Open user menu</span>
                     <img
                       className="w-8 h-8 rounded-full"
                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt=""
                     />
                   </button>
                 </div>
            <a href="/event-list" className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><BiHomeAlt2 className='text-amber-400'/>-Inicio</a>
            <a href="/input-perfil" className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><LuUser2 className='text-amber-400 '/>-Perfil</a>
            <a href="#" className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><IoCalendarClearOutline className='text-amber-400'/>-Calendario</a>
            <a href="#" className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><FiSettings className='text-amber-400'/>-Settings</a>
            {/* <a href="#" className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><HiOutlineTicket className='text-amber-400'/>-Entradas</a> */}
          </div>
          <div>
          <a href="/" className="flex px-3 py-2 mt-20 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"><PiSignOutBold className='text-amber-400'/>-Cerrar Sesión</a>
          <img className="w-auto h-10 ml-5 border rounded-full shadow-2xl" src={logow} alt="Flowento" />
          </div>
        </div>
      )}
    </nav>
  );
}