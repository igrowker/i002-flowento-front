import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingButton = () => {
  return (
    <>
      <Link
        to="/event-form"
        className="fixed z-10 p-2 text-white transition-transform duration-500 border-2 border-white rounded-full shadow-lg md:p-4 md:border-4 bottom-14 md:bottom-16 right-8 bg-orangeprimary hover:bg-orange-600 md:hover:scale-110"
        style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
      >
        <FaPlus className="text-2xl" />
      </Link>
    </>
  );
};

export default FloatingButton;
