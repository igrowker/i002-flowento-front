import imgAvatar from "../../assets/Avatar.png";
import "tailwindcss/tailwind.css";
import { GoArrowLeft } from "react-icons/go";

const PerfilEdit = () => {
  return (
    <>
      <div className="mb-56 ">
       
        <div className="static text-4xl bg-White h-80 font-lato ">
         <GoArrowLeft />
          <div className="relative flex flex-col items-center justify-center top-16">
            <p>Juan Carlos</p>
            <img src={imgAvatar} alt="imagen Perfil" />
          </div>
        </div>

        <div className="max-w-md p-4 mx-auto ">
          <div>
            <p>Nombre:</p>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div>
            <p>Apellido:</p>
            <input
              type="text"
              placeholder="Apellido"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div>
            <p>Fecha de nacimiento:</p>
            <input
              type="date"
              placeholder="fecha de nacimiento"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div>
            <p>Telefono:</p>
            <input
              type="tel"
              placeholder="número de telefono"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div>
            <p>Ubicacion:</p>
            <input
              type="text"
              placeholder="Ubicación"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div>
            <p>Cargo:</p>
            <input
              type="text"
              placeholder="Cargo"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div>
            <p>Empresa:</p>
            <input
              type="text"
              placeholder="Empresa"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div>
            <p>Intereses:</p>
            <input
              type="text"
              placeholder=""
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div className="pl-10">
          <button className="justify-center h-8 mr-8 text-white rounded-full w-80 bg-orangeprimary">
            Guardar
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilEdit;
