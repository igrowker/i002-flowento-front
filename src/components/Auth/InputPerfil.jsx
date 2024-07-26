import { Link } from "react-router-dom";
import imgAvatar from "../../assets/profile.webp";
import { FaPhone, FaUser } from "react-icons/fa";
import { BsCalendar2Check } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoInformation } from "react-icons/io5";
import PropTypes from "prop-types";
import { useUser } from "../../context/UserContext";
import Preloader from "../Preloader";

const InfoRow = ({ icon: Icon, label, value }) => (
  <>
    <span className="flex items-center text-sm font-bold text-orangeprimary">
      <Icon className="mr-2" />
      <span>{label}:</span>
    </span>
    <span className="text-sm text-gray-900">{value || "No disponible"}</span>
  </>
);

InfoRow.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

const InputPerfil = () => {
  const { user } = useUser();

  if (!user) {
    return <Preloader/>;
  }

  const getFullName = () => {
    if (user.first_name && user.last_name) {
      return `${user.first_name} ${user.last_name}`;
    }
    return user.first_name || user.last_name || "No disponible";
  };

  const userInfo = [
    { icon: FaUser, label: "Nombre y Apellido", value: getFullName() },
    {
      icon: BsCalendar2Check,
      label: "Nacimiento",
      value: user.birthDate || "No disponible",
    },
    { icon: FaPhone, label: "Teléfono", value: user.phone || "No disponible" },
    { icon: CgMail, label: "Email", value: user.email || "No disponible" },
    {
      icon: GoLocation,
      label: "Dirección",
      value: user.address || "No disponible",
    },
    {
      icon: GrUserWorker,
      label: "Cargo",
      value: user.position || "No disponible",
    },
    {
      icon: MdOutlineMapsHomeWork,
      label: "Empresa",
      value: user.company || "No disponible",
    },
    {
      icon: IoInformation,
      label: "Información",
      value: user.information || "No disponible",
    },
  ];

  return (
    <div className="flex content-center justify-center py-10 md:py-16 font-lato">
      <div className="relative flex flex-col items-center">
        <div className="overflow-hidden bg-white rounded-lg ">
          <div className="flex flex-col items-center justify-center top-16">
            <span className="my-4 text-2xl font-bold text-center text-redprimary">
              {getFullName()}
            </span>
            <img src={user.avatar || imgAvatar} alt="imagen Perfil" className="w-24 h-24 transition-transform duration-300 border-2 border-gray-500 rounded-full md:hover:scale-105"/>
          </div>
          <div className="p-6 text-center lg:px-96">
            <div className="grid grid-cols-2 gap-2 md:gap-4 sm:px-6">
              {userInfo.map((info, index) => (
                <InfoRow key={index} {...info} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 text-xs md:text-base top-16">
          <button
            type="button"
            className="flex rounded-3xl justify-center bg-orangeprimary px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white transition-transform duration-300 md:hover:scale-105"
            style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
          >
            <Link to="/event-list">Volver a los eventos</Link>
          </button>
          <button
            type="button"
            className="flex rounded-3xl justify-center bg-orangeprimary px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white transition-transform duration-300 md:hover:scale-105"
            style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
          >
            <Link to="/perfil-edit">¿Deseas editar tu perfil?</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPerfil;
