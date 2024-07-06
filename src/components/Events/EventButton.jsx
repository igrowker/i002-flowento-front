import PropTypes from "prop-types";
import { useState } from "react";

const EventButton = ({ onFilterChange }) => {
  const [activeButton, setActiveButton] = useState("todos");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    onFilterChange(buttonName);
  };

  return (
    <div className="flex flex-wrap gap-4 px-4 py-2 lg:justify-end lg:w-1/2">
      <button
        className={`py-1 px-4 rounded-3xl transition-colors ${
          activeButton === "todos"
            ? "bg-orangeprimary text-white hover:bg-orange-600"
            : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
        } transition-all duration-400`}
        onClick={() => handleButtonClick("todos")}
      >
        Todos
      </button>
      <button
        className={`py-1 px-4 rounded-3xl transition-colors ${
          activeButton === "gratuitos"
            ? "bg-orangeprimary text-white hover:bg-orange-600"
            : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
        } transition-all duration-400`}
        onClick={() => handleButtonClick("gratuitos")}
      >
        Gratuitos
      </button>
      <button
        className={`py-1 px-4 rounded-3xl transition-colors ${
          activeButton === "de_pago"
            ? "bg-orangeprimary text-white hover:bg-orange-600"
            : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
        } transition-all duration-400`}
        onClick={() => handleButtonClick("de_pago")}
      >
        De pago
      </button>
      <button
        className={`py-1 px-4 rounded-3xl transition-colors ${
          activeButton === "proximos"
            ? "bg-orangeprimary text-white hover:bg-orange-600"
            : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
        } transition-all duration-400`}
        onClick={() => handleButtonClick("proximos")}
      >
        Próximos
      </button>
      <button
        className={`py-1 px-4 rounded-3xl transition-colors ${
          activeButton === "finalizado"
            ? "bg-orangeprimary text-white hover:bg-orange-600"
            : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
        } transition-all duration-400`}
        onClick={() => handleButtonClick("finalizado")}
      >
        Finalizados
      </button>
    </div>
  );
};

EventButton.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default EventButton;
