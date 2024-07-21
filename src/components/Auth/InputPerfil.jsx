import { Link } from "react-router-dom";
import imgAvatar from "../../assets/Avatar.png";
import { FaPhone, FaUser } from "react-icons/fa";
import { BsCalendar2Check } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoInformation } from "react-icons/io5";
import PropTypes from "prop-types";

const InfoRow = ({ icon: Icon, label, value }) => (
  <>
    <span className="flex items-center text-sm font-bold text-orangeprimary">
      <Icon className="mr-2" />
      <span>{label}:</span>
    </span>
    <span className="text-sm text-gray-900">{value}</span>
  </>
);

InfoRow.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const InputPerfil = () => {
  const userInfo = [
    { icon: FaUser, label: "Nombre y Apellido", value: "Nombre Apellido" },
    {
      icon: BsCalendar2Check,
      label: "Fecha de Nacimiento",
      value: "04/02/2004",
    },
    { icon: FaPhone, label: "Teléfono", value: "+54 11 12345678" },
    { icon: CgMail, label: "Email", value: "usuario@gmail.com" },
    { icon: GoLocation, label: "Dirección", value: "Buenos Aires" },
    { icon: GrUserWorker, label: "Cargo", value: "Programador" },
    { icon: MdOutlineMapsHomeWork, label: "Empresa", value: "Igrowker" },
    {
      icon: IoInformation,
      label: "Información",
      value:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo architecto, saepe suscipit quos maiores tempore!",
    },
  ];

  return (
    <>
      <div className="flex content-center justify-center font-lato">
        <div className="relative flex flex-col items-center">
          <div className="my-4 overflow-hidden bg-white rounded-lg">
            <div className="flex flex-col items-center justify-center top-16">
              <span className="my-4 text-2xl font-bold text-center text-redprimary">
                Nombre del Usuario
              </span>
              <img src={imgAvatar} alt="imagen Perfil" />
            </div>
            <div className="px-6 pt-5 text-center lg:px-96">
              <div className="grid grid-cols-2 gap-2 py-1 md:gap-4 sm:px-6">
                {userInfo.map((info, index) => (
                  <InfoRow key={index} {...info} />
                ))}
              </div>
            </div>
          </div>

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
              <Link to="/perfil-edit">¿Deseas editar tu perfil?</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputPerfil;
