import "tailwindcss/tailwind.css";
import logow from "../../assets/logow.png";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <>
      <div className="flex min-h-full flex-col font-sans  justify-center px-6 py-12  lg:px-8">
        <div className="bg-gradient-red sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto h-60 border w-auto rounded-full shadow-2xl"
            src={logow}
            alt="Flowento"
          />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Flowento
          </h1>

          <h5 className="mt-1 text-center   leading-9 tracking-tight text-gray-300">
            Olvidaste tu contraseña?
          </h5>
          <h5 className="mt-1 text-center   leading-9 tracking-tight text-gray-300">
            Te ayudamos a Recuperarla
          </h5>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Repetir Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder=" Repetir Contraseña"
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
                Recuperar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link to={"/Login"}>
              <span className="font-semibold leading-6 text-orangeprimary hover:text-orangesecondary">
                Iniciar Sesión
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
