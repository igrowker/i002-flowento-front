import PropTypes from "prop-types";
import { useState } from "react";

const EventButton = ({ onFilterChange }) => {
  const buttons = [
    { name: "todos", label: "Todos" },
    { name: "gratuitos", label: "Gratuitos" },
    { name: "de_pago", label: "De Pago" },
    { name: "proximos", label: "Próximos" },
    { name: "finalizado", label: "Finalizados" },
  ];

  const [activeButton, setActiveButton] = useState("todos");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    onFilterChange(buttonName);
  };

  return (
    <div className="flex flex-wrap gap-4 px-4 py-2 lg:justify-end lg:w-1/2">
      {buttons.map((button) => (
        <button
          key={button.name}
          className={`py-1 px-4 rounded-3xl transition-colors ${
            activeButton === button.name
              ? "bg-orangeprimary text-white hover:bg-orange-600 transition-transform duration-300 md:hover:scale-105"
              : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white transition-transform duration-300 md:hover:scale-105"
          } transition-all duration-500`}
          onClick={() => handleButtonClick(button.name)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

EventButton.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default EventButton;
