/* eslint-disable react/prop-types */
import { InputPassword } from "./InputPassword";

export const InputForm = ({ name, type, required, description }) => {
  return (
    <div className="my-2.5 flex justify-center items-center flex-col">
      <label
        htmlFor={name.toLowerCase()}
        className="w-full text-sm font-bold text-black"
      >
        {name} {required && <span className="text-redprimary">*</span>}
      </label>
      {type === "password" ? (
        <InputPassword name={name} />
      ) : (
        <div className="w-full h-9">
          <input
            type={type}
            className="relative block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
            id={name.toLowerCase()}
            name={name.toLowerCase()}
          />
        </div>
      )}
      {description !== "" && (
        <p className="w-full text-bghours">{description}</p>
      )}
    </div>
  );
};
