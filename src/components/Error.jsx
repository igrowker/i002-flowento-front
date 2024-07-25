import Error404 from "../assets/Error.svg";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="flex flex-col content-center justify-center h-screen min-h-full px-6 font-lato lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-3xl font-bold tracking-tight text-center ">
            ¡Ooops!
          </h1>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-xl tracking-tight text-center leading-1">
            ¡Algo ha ocurrido!
            <br />
            No sabemos que ha podido
            <br /> pasar, pero lo arreglaremos...
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm from-white to-orangeprimary">
          <img
            className="w-auto mx-auto rounded-lg h-60 "
            src={Error404}
            alt="Flowento"
          />
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-xl tracking-tight text-center leading-1">
            No pasa nada, te volvemos
            <br />a indicar el camino a casa...
          </h1>
        </div>

        <div>
          <h5 className="mt-6 leading-9 tracking-tight text-center text-gray-500"></h5>
        </div>

        <div className="flex justify-center">
          <Link to="/">
            <button
              type="submit"
              className="flex w-full rounded-3xl justify-center bg-orangeprimary px-3 py-1.5 text-sm md:text-base font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white"
              style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
            >
              Volver al Inicio
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
