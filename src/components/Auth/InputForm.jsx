/* eslint-disable react/prop-types */
import { InputPassword } from "./InputPassword";

export const InputForm = ({ name, type, required, description }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <label
        htmlFor={name.toLowerCase()}
        className="w-full mt-3 text-sm font-bold text-black md:text-base"
      >
        {name} {required && <span className="text-redprimary">*</span>}
      </label>
      {type === "password" ? (
        <InputPassword name={name} />
      ) : (
        <div className="w-full h-9">
          <input
            type={type}
            className="block w-full py-2 pl-4 text-sm border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary md:text-base"
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
