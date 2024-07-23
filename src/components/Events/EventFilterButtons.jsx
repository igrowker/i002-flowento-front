import PropTypes from "prop-types";
import { useState } from "react";

const EventFilterButtons = ({ onFilterChange }) => {
  const buttons = [
    { name: "todos", label: "Todos" },
    { name: "pendiente", label: "Pendiente" },
    { name: "aprobado", label: "Aprobado" },
    { name: "rechazado", label: "Rechazado" },
    { name: "finalizado", label: "Finalizado" },
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
              ? "bg-orangeprimary text-white hover:bg-orange-600"
              : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
          } transition-all duration-400`}
          onClick={() => handleButtonClick(button.name)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

EventFilterButtons.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default EventFilterButtons;
