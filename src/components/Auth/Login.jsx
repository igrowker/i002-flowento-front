import "tailwindcss/tailwind.css";
import logow from "../../assets/logow.png";
import { Link } from "react-router-dom";

function Login() {
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
          <form className="space-y-6" action="#" method="POST">
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
                  autocomplete="email"
                  placeholder=" Ingrese su email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  autocomplete="current-password"
                  placeholder=" Ingrese su contraseña"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orangesecondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Acceder
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tienes Cuenta?
            <Link to={"/register"}>
              <span className='className="font-semibold leading-6 text-orangeprimary hover:text-orangesecondary"'>
                Registrate
              </span>
            </Link>
            {/* <a href="#" className="font-semibold leading-6 text-orangeprimary hover:text-orangesecondary">Registrate</a> */}
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
