import btnCalendario from "../../assets/BsCalendarCheck.png";

export const DateForm = () => {
  return (
    <div className="text-gray300 flex-1 w-1/2">
      <label htmlFor="fecha">Fecha de nacimiento</label>
      <div className="w-full flex items-center border-solid rounded border-2 border-orangeprimary">
        <div className="flex items-center px-3 w-full">
          <img
            src={btnCalendario}
            alt="boton seleccionar fecha"
            className="mr-2.5"
          />
          <input
            type="text"
            placeholder="Fecha"
            name="fecha"
            id="fecha"
            className="w-full"
          />
          <input type="date" className="hidden w-full" />
        </div>
      </div>
    </div>
  );
};
