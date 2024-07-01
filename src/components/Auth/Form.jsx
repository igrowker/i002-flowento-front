import { InputForm } from "./InputForm.jsx";
import inputInfo from "../../assets/js/resgister.js";
import { Options } from "./Options.jsx";
import { DateForm } from "./DateForm.jsx";

export const Form = () => {
  const registrarse = (e) => {
    e.preventDefault();
    console.log("hola");
  };

  return (
    <form
      className=" mt-36 font-lato flex flex-col"
      onSubmit={(e) => registrarse(e)}
    >
      {inputInfo.map((value, index) => (
        <InputForm
          key={index}
          name={value.name}
          type={value.type}
          required={value.required}
          description={value.description}
        />
      ))}
      <div className="flex gap-x-2">
        <DateForm />
        <Options />
      </div>
      <div>
        <InputForm
          name={"Telefono"}
          type={"tel"}
          required={false}
          description={""}
        />
      </div>
      <div>
        <InputForm
          name={"Pais"}
          type={"text"}
          required={false}
          description={""}
        />
      </div>
      <div>
        <input
          type="submit"
          value="Registrarse"
          className="flex w-full justify-center rounded-md bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orangesecondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
      </div>
    </form>
  );
};
