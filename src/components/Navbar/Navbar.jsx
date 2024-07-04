
import { useState } from 'react';
import "tailwindcss/tailwind.css";
import logow from "../../assets/logow.png";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-red  " >
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex   h-16">
          
          <div className="flex items-center">
            
                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                  >
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
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
                        className="h-6 w-6"
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
             
              <div className="ml-10  flex space-x-4">
              
                <a href="#" className="text-gray-300 hover:text-orangeprimary px-3 py-2 rounded-md text-sm font-medium">Perfil</a>
                <a href="#" className="text-gray-300 hover:text-orangeprimary px-3 py-2 rounded-md text-sm font-medium">Calendario</a>
                <a href="#" className="text-gray-300 hover:text-orangeprimary px-3 py-2 rounded-md text-sm font-medium">Entradas</a>
                <a href="#" className="text-gray-300 hover:text-orangeprimary px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                <a href="#" className="text-gray-300 hover:text-orangeprimary px-3 py-2 rounded-md text-sm font-medium">Settings</a>
              

                <div className=" flex sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                      <button type="button" class="relative rounded-full bg-inherit p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span class="absolute -inset-1.5"></span>
                        <span class="sr-only">View notifications</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                      </button>

                          <div className="relative ml-3">
                            <div>
                              <button
                                type="button"
                                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                id="user-menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
                              </button>
                            </div>
                           </div>
                   </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {isOpen && (
        <div className="md:30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="relative ml-3">
                  <button
                     type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                     id="user-menu-button"
                     aria-expanded="false"
                     aria-haspopup="true"
                   >
                     <span className="absolute -inset-1.5"></span>
                     <span className="sr-only">Open user menu</span>
                     <img
                       className="h-8 w-8 rounded-full"
                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt=""
                     />
                   </button>
                 </div>
            <a href="#" className="text-gray-300 hover:text-orangeprimary block px-3 py-2 rounded-md text-base font-medium">Perfil</a>
            <a href="#" className="text-gray-300 hover:text-orangeprimary block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
            <a href="#" className="text-gray-300 hover:text-orangeprimary block px-3 py-2 rounded-md text-base font-medium">Calendario</a>
            <a href="#" className="text-gray-300 hover:text-orangeprimary block px-3 py-2 rounded-md text-base font-medium">Entradas</a>
            <a href="#" className="text-gray-300 hover:text-orangeprimary block px-3 py-2 rounded-md text-base font-medium">Settings</a>
          </div>
          <div>
          <a href="#" className="text-gray-300 mt-20 hover:text-orangeprimary block px-3 py-2 rounded-md text-base font-medium">Cerrar Sesión</a>
          <img className="ml-5 h-10 border w-auto rounded-full shadow-2xl" src={logow} alt="Flowento" />
          </div>
        </div>
      )}
    </nav>
  );
}