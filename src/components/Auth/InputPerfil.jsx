import imgAvatar from "../../assets/Avatar.png";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const InputPerfil = () => {
  return (
    <>
      <div className="mb-56 font-lato">
        <div className="relative flex flex-col items-center">
          <div className="text-4xl bg-White h-80 font-lato">
            <div className="relative flex flex-col items-center justify-center top-16">
              <p>Nombre y Apellido</p>
              <img src={imgAvatar} alt="imagen Perfil" />
              <p>Fecha de nacimiento:</p>
            </div>
          </div>

          <Link to={"/perfil-edit"}>
            <span className="items-center font-semibold leading-6 text-orangeprimary hover:text-orangesecondary">
              Editar perfil
            </span>
          </Link>
        </div>

        <div className="max-w-md p-4 mx-auto ">
          <div>
            <input
              type="text"
              placeholder="Cargo"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="número de telefono"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Ubicación"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div className="justify-center text-center">
            <p>Intereses:</p>
            <button className="px-4 py-2 text-white bg-yellow-300 rounded-3xl">
              Java Script
            </button>
            <button className="px-4 py-2 text-white rounded-3xl bg-lime-100">
              Python
            </button>
            <button className="px-4 py-2 text-white rounded-3xl bg-sky-300">
              Raect
            </button>
            <button className="px-4 py-2 text-white bg-purple-200 rounded-3xl">
              Tailwind
            </button>
          </div>

          <div className="text-center">
            <button className="px-4 py-2 mt-10 text-white rounded-3xl bg-orangeprimary">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputPerfil;
