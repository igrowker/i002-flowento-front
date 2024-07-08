export const Options = () => {
  return (
    <div className="text-gray300 flex-1 w-1/2">
      <label htmlFor="gender">Genero</label>
      <div className="border-solid rounded border-2 border-gray500">
        <select name="gender" id="gender">
          <option value="Genero">Genero:</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="Otro">Otros</option>
        </select>
      </div>
    </div>
  );
};
