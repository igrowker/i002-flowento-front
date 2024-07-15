import { useState } from "react";
import "tailwindcss/tailwind.css";
import logow from "../../assets/logow.png";
import { LuUser2 } from "react-icons/lu";
import { BiBell, BiHomeAlt2 } from "react-icons/bi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { PiSignOutBold } from "react-icons/pi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="rounded-b-full bg-gradient-red font-lato">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex h-16">
          <div className="flex items-center">
            <div className="flex -mr-2 md:hidden">
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
                <a
                  href="/"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary"
                >
                  Perfil
                </a>
                <a
                  href="/"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary"
                >
                  Calendario
                </a>
                <a
                  href="/"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary"
                >
                  Entradas
                </a>
                <a
                  href="/"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary"
                >
                  Inicio
                </a>
                <a
                  href="/"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-orangeprimary"
                >
                  Settings
                </a>

                <button
                  type="button"
                  className="relative p-1 text-gray-300 rounded-full bg-inherit hover:text-orangeprimary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <BiBell />
                </button>
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
            <a
              href="/"
              className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"
            >
              <LuUser2 className="text-amber-400 " />
              -Perfil
            </a>
            <a
              href="/"
              className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"
            >
              <BiHomeAlt2 className="text-amber-400" />
              -Inicio
            </a>
            <a
              href="/"
              className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"
            >
              <IoCalendarClearOutline className="text-amber-400" />
              -Calendario
            </a>
            <a
              href="/"
              className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"
            >
              <HiOutlineTicket className="text-amber-400" />
              -Entradas
            </a>
            <a
              href="/"
              className="flex px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"
            >
              <FiSettings className="text-amber-400" />
              -Settings
            </a>
          </div>
          <div>
            <a
              href="/"
              className="flex px-3 py-2 mt-20 text-base font-medium text-gray-300 rounded-md hover:text-orangeprimary"
            >
              <PiSignOutBold className="text-amber-400" />
              -Cerrar Sesión
            </a>
            <img
              className="w-auto h-10 ml-5 border rounded-full shadow-2xl"
              src={logow}
              alt="Flowento"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
