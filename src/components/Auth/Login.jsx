import "tailwindcss/tailwind.css";
import logow from "../../assets/logow.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";

function Login() {

  const form = useRef(null);

  const login = (e) => {
    e.preventDefault();

    const data = new FormData(form.current);

    const obj = {};

    data.forEach((value, key) => obj[key] = value);

    //en el front no olvidar esta parte
    axios.defaults.withCredentials = true;

    //cuando lo montemos en vercel o render estas url hay q cambiarlas
    axios.post("http://localhost:8080/auth/login", {
      email: obj["email"],
      password: obj["password"]
    })
      .then(response => {
        const { data } = response;

        //deje algunos console log para q vean q les llega desde el back
        console.log(response);
        console.log(data);

        if (data.status === "success") {
          alert("Te logueaste con exito");
        }
        else {
          alert("alguno de los datos es incorrecto"); //en la data el mensaje puede ser mas perzonalizado
        }
      })
  }

  return (
    <>
      <div className="flex min-h-full flex-col font-sans  justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold  leading-9 tracking-tight text-gray-900">
            Bienvenido
          </h2>
          <img className="mx-auto h-60 w-auto" src={logow} alt="Flowento" />
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Plataforma de eventos de
          </h2>
          <h1 className="text-orangeprimary text-center text-7xl font-bold ">HdE</h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form ref={form} className="space-y-6" onSubmit={(e) => login(e)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-left text-gray-900"
              >
                Correo Electrónico
              </label>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder=" Ingrese su email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>

            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  {/* <Link to={"/recoverPassword"} /> link provicinal todavia falta definir el enpoint y la vista para recuperar contraseña (cuando eso este sacar la etiquea link de html osea "a") */}
                  <a
                    href="#"
                    className="font-semibold text-orangeprimary hover:text-orangesecondary"
                  >
                    He olvidado mi Contraseña
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder=" Ingrese su contraseña"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orangesecondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Acceder
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tienes Cuenta?
            <Link to={"/register"}>
              <span className="font-semibold leading-6 text-orangeprimary hover:text-orangesecondary">
                Registrate
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;