import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import DiagonalBackground from "./DiagonalBackground";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";

const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTogglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (formData.newPassword !== formData.confirmNewPassword) {
      setError("Las contraseñas nuevas no coinciden.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/reset-password`,
        {
          email: formData.email,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }
      );
      if (response.data.status === "success") {
        alert("Contraseña recuperada con éxito");
      } else {
        setError("Error al recuperar la contraseña.");
      }
    } catch (error) {
      setError("Error en la solicitud.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="index-container">
      <DiagonalBackground />
      <Header />
      <div className="flex flex-col justify-center font-sans lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-xs font-bold tracking-tight text-center md:text-sm lg:text-lg">
            Cambiar contraseña
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
                />
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="currentPassword"
                  className="block text-sm font-bold text-gray-900"
                >
                  Contraseña Actual
                </label>
              </div>
              <input
                id="currentPassword"
                name="currentPassword"
                type={showPassword.currentPassword ? "text" : "password"}
                autoComplete="current-password"
                value={formData.currentPassword}
                onChange={handleChange}
                required
                className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
              />
              <button
                type="button"
                onClick={() => handleTogglePassword("currentPassword")}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword.currentPassword ? (
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
                  htmlFor="newPassword"
                  className="block text-sm font-bold text-gray-900"
                >
                  Nueva Contraseña
                </label>
              </div>
              <input
                id="newPassword"
                name="newPassword"
                type={showPassword.newPassword ? "text" : "password"}
                autoComplete="new-password"
                value={formData.newPassword}
                onChange={handleChange}
                required
                className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
              />
              <button
                type="button"
                onClick={() => handleTogglePassword("newPassword")}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword.newPassword ? (
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
                  htmlFor="confirmNewPassword"
                  className="block text-sm font-bold text-gray-900"
                >
                  Confirmar Nueva Contraseña
                </label>
              </div>
              <input
                id="confirmNewPassword"
                name="confirmNewPassword"
                type={showPassword.confirmNewPassword ? "text" : "password"}
                autoComplete="new-password"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                required
                className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
              />
              <button
                type="button"
                onClick={() => handleTogglePassword("confirmNewPassword")}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword.confirmNewPassword ? (
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
            {error && (
              <p className="mt-2 text-sm text-center text-red-500">{error}</p>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="flex mt-1 rounded-3xl justify-center bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white"
                style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
              >
                {loading ? "Cargando..." : "Cambiar Contraseña"}
              </button>
            </div>
            <div className="flex justify-between">
              <span className="text-base">
                <button
                  type="button"
                  className="font-semibold text-orange-600 hover:text-orangeprimary"
                >
                  <Link to="/">Volver al inicio</Link>
                </button>
              </span>
              <span className="text-base">
                <button
                  type="button"
                  className="font-semibold text-orange-600 hover:text-orangeprimary"
                >
                  <Link to="/login">Inicia Sesión</Link>
                </button>
              </span>
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
