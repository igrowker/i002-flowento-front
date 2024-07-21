import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import DiagonalBackground from "./DiagonalBackground";
import Header from "./Header";

function Login({ onNavigateToReset }) {
  const navigate = useNavigate();
  const [data, setData] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const form = useRef(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const login = (e) => {
    e.preventDefault();
    setData(false);
    const data = new FormData(form.current);
    const obj = {};
    data.forEach((value, key) => (obj[key] = value));

    //FORMA CON FETCH
    // fetch("https://i002-flowento-back-1.onrender.com/auth/login", {
    //   method: "POST",
    //   body: JSON.stringify(obj),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then(result => result.json())
    // .then(json => {
    //     console.log(json);
    // })

    //FORMA AXIOS 1

    axios({
      method: "POST",
      url: "http://localhost:8080/auth/login",
      data: {
        email: obj["email"],
        password: obj["password"],
      },
      withCredentials: true,
    })
      .then((response) => {
        const { data } = response;

        if (data.status === "success") {
          alert("Te logueaste con éxito");
          navigate("/event-list");
        } else {
          alert("Alguno de los datos es incorrecto");
        }

        setData(true);
      })
      .catch((error) => {
        const { response } = error;
        const { data } = response;

        alert(data.payload);
        setData(true);
      });
  };

  //FORMA AXIOS 2
  // axios
  //   .post("https://i002-flowento-back-1.onrender.com/auth/login", {
  //     email: obj["email"],
  //     password: obj["password"],
  //   })
  //   .then((response) => {
  //     const { data } = response;

  //     //deje algunos console log para q vean q les llega desde el back
  //     console.log(response);
  //     console.log(data);

  //     if (data.status === "success") {
  //       alert("Te logueaste con exito");
  //     } else {
  //       alert("alguno de los datos es incorrecto"); //en la data el mensaje puede ser mas perzonalizado
  //     }
  // setData(true);
  // navigate('/event-list');
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     const { response } = error;
  //     const { data } = response;

  //     alert(data.payload);
  //   })
  //};

  return (
    <div className="index-container">
      <DiagonalBackground />
      <Header />
      <div className="flex flex-col font-sans justify-center6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-xs font-bold tracking-tight text-center md:text-sm lg:text-lg">
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-4 w-80">
          <form ref={form} className="space-y-2" onSubmit={(e) => login(e)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-900"
              >
                Correo Electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <EyeSlashIcon
                      className="w-5 h-5 text-orangeprimary"
                      aria-hidden="true"
                    />
                  ) : (
                    <EyeIcon
                      className="w-5 h-5 text-orangeprimary"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
              <div className="mt-2 text-sm text-end">
                <button type="button" onClick={onNavigateToReset}>
                  <span className="font-semibold text-orange-600 hover:text-orangeprimary">
                    <Link to="/password-reset">Olvidé mi contraseña</Link>
                  </span>
                </button>
              </div>
            </div>
          </form>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!data}
              className="flex rounded-3xl mt-2 justify-center bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white"
              style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
            >
              Iniciar Sesión
            </button>
          </div>
          <p className="mt-2 text-sm text-center text-gray-500">
            <button
              type="button"
              className="font-semibold text-orange-600 hover:text-orangeprimary"
            >
              <Link to="/">Volver al inicio</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  onNavigateToReset: PropTypes.func.isRequired,
};

export default Login;
