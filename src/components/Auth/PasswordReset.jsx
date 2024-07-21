import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import DiagonalBackground from "./DiagonalBackground";
import Header from "./Header";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    resetPassword: false,
  });

  const handleTogglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="index-container">
      <DiagonalBackground />
      <Header />
      <div className="flex flex-col justify-center font-sans lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-xs font-bold tracking-tight text-center md:text-sm lg:text-lg">
            Recuperar contraseña
          </h2>
        </div>
        <div className="mt-4 w-80">
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-900"
              >
                Correo Electrónico
              </label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
                />
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <input
                id="password"
                name="password"
                type={showPassword.password ? "text" : "password"}
                autoComplete="current-password"
                required
                className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
              />
              <button
                type="button"
                onClick={() => handleTogglePassword("password")}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword.password ? (
                  <EyeSlashIcon
                    className="w-5 h-5 mt-6 text-gray-500 text-orangeprimary"
                    aria-hidden="true"
                  />
                ) : (
                  <EyeIcon
                    className="w-5 h-5 mt-6 text-gray-500 text-orangeprimary"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="resetPassword"
                  className="block text-sm font-bold text-gray-900"
                >
                  Repetir Contraseña
                </label>
              </div>
              <input
                id="resetPassword"
                name="resetPassword"
                type={showPassword.resetPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
              />
              <button
                type="button"
                onClick={() => handleTogglePassword("resetPassword")}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword.resetPassword ? (
                  <EyeSlashIcon
                    className="w-5 h-5 mt-6 text-gray-500 text-orangeprimary"
                    aria-hidden="true"
                  />
                ) : (
                  <EyeIcon
                    className="w-5 h-5 mt-6 text-gray-500 text-orangeprimary"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex mt-3 rounded-3xl justify-center bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white"
                style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
              >
                Recuperar
              </button>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">
                <button
                  type="button"
                  className="font-semibold text-orange-600 hover:text-orangeprimary"
                >
                  <Link to="/">Volver al inicio</Link>
                </button>
              </p>
              <p className="text-sm text-gray-500">
                <button
                  type="button"
                  className="font-semibold text-orange-600 hover:text-orangeprimary"
                >
                  <Link to="/login">Iniciar Sesión</Link>
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

PasswordReset.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default PasswordReset;
