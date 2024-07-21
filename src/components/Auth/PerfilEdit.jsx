import { useState } from "react";
import PropTypes from "prop-types";
import { IoInformation } from "react-icons/io5";
import { FaPhone, FaRegImage, FaUser } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";
import { CgMail } from "react-icons/cg";

const PerfilEdit = () => {
  const [evento, setEvento] = useState({
    titulo: "",
    fecha: new Date(),
    hora: "",
    ubicacion: "",
    estado: "",
    imagen: "",
    precio: "",
  });

  const handleChange = (field, value) => {
    setEvento((prevEvento) => ({
      ...prevEvento,
      [field]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEvento((prevEvento) => ({
          ...prevEvento,
          imagen: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const formFields = [
    {
      id: "nombre",
      label: "Nombre",
      type: "text",
      icon: <FaUser className="text-orangeprimary" />,
    },
    {
      id: "apellido",
      label: "Apellido",
      type: "text",
      icon: <FaUser className="text-orangeprimary" />,
    },
    {
      id: "fecha",
      label: "Fecha de Nacimiento",
      type: "date",
      icon: <BsCalendarCheck className="text-orangeprimary" />,
    },
    {
      id: "numero de telefono",
      label: "Número de Teléfono",
      type: "number",
      icon: <FaPhone className="text-orangeprimary" />,
    },
    {
      id: "mail",
      label: "Email",
      type: "email",
      icon: <CgMail className="text-orangeprimary" />,
    },
    {
      id: "direccion",
      label: "Dirección",
      type: "text",
      icon: <GoLocation className="text-orangeprimary" />,
    },
    {
      id: "cargo",
      label: "Cargo",
      type: "text",
      icon: <GrUserWorker className="text-orangeprimary" />,
    },
    {
      id: "empresa",
      label: "Empresa",
      type: "text",
      icon: <MdOutlineMapsHomeWork className="text-orangeprimary" />,
    },
    {
      id: "informacion",
      label: "Información",
      type: "text",
      icon: <IoInformation className="text-orangeprimary" />,
    },
    {
      id: "imagen",
      label: "Editar imagen de perfil",
      type: "file",
      icon: <FaRegImage className="text-orangeprimary" />,
    },
  ];

  return (
    <div className="flex content-center justify-center font-lato">
      <div className="p-8 w-96">
        <div className="flex flex-col items-center justify-center top-16">
          <span className="my-4 text-lg font-bold text-center text-redprimary">
            Editar Perfil
          </span>
        </div>
        <form>
          {formFields.map((field) => (
            <div key={field.id} className="relative mb-4">
              <label
                htmlFor={field.id}
                className="block text-sm font-bold text-orangeprimary"
              >
                {field.label}
              </label>
              {field.type === "file" ? (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      id={field.id}
                      name={field.id}
                      value={evento[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
                      required
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      {field.icon}
                    </span>
                  </div>
                  <input
                    type="file"
                    id={`${field.id}-file`}
                    accept=".jpg, .jpeg, .png"
                    onChange={handleFileChange}
                    className="block w-full py-2 pl-4 mt-1 border-gray-300 shadow-sm pr-9 focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
                  />
                </>
              ) : field.id === "fecha" ? (
                <div className="relative">
                  <DatePicker
                    selected={evento.fecha}
                    onChange={(date) => handleChange("fecha", date)}
                    dateFormat="yyyy/MM/dd"
                    className="block py-2 pl-4 mt-1 border border-gray-300 shadow-sm w-80 pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    {field.icon}
                  </span>
                </div>
              ) : (
                <div className="relative">
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={evento[field.id]}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
                    required={field.type !== "text"}
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    {field.icon}
                  </span>
                </div>
              )}
            </div>
          ))}
        </form>

        <div className="flex items-center justify-center gap-6 mt-4 text-xs md:text-base top-16">
          <button
            type="button"
            className="flex mt-3 rounded-3xl justify-center bg-orangeprimary px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white"
            style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
          >
            <Link to="/event-list">Volver a los eventos</Link>
          </button>

          <button
            type="button"
            className="flex mt-3 rounded-3xl justify-center bg-orangeprimary px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white"
            style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
          >
            <Link to="/perfil-edit">Guardar</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

PerfilEdit.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PerfilEdit;
