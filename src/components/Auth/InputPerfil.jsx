import imgAvatar from "../../assets/Avatar.png";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const InputPerfil = () => {
  return (
    <>
      <div className="mb-56 ">
        <div className="flex flex-col items-center justify-center relative ">
          <div className="bg-White h-80 text-4xl font-lato">
            <div className="flex flex-col items-center justify-center relative top-16">
              <p>Nombre y Apellido</p>
              <img src={imgAvatar} alt="imagen Perfil" />
              <p>Fecha de nacimiento:</p>
            </div>
          </div>

          <Link to={"/PerfilEdit"}>
            <span className="font-semibold leading-6 items-center text-orangeprimary hover:text-orangesecondary">
              Editar perfil
            </span>
          </Link>
        </div>

        <div className="max-w-md mx-auto p-4 ">
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

          <div>
            <p>Intereses:</p>
            <button className="bg-orangeprimary  text-white px-4 py-2 rounded-md">
              Java Script
            </button>
            <button className="bg-lime-100 text-white px-4 py-2 rounded-md">
              Python
            </button>
            <button className="bg-sky-300 text-white px-4 py-2 rounded-md">
              Raect
            </button>
            <button className="bg-purple-200 text-white px-4 py-2 rounded-md">
              Tailwind
            </button>
          </div>

          <div>
            <button className="bg-orangeprimary mt-10 text-white px-4 py-2 rounded">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputPerfil;
