/* eslint-disable react/prop-types */
import { InputPassword } from "./InputPassword";

export const InputForm = ({ name, type, required, description }) => {
  return (
    <div className="my-2.5 flex justify-center items-center flex-col">
      <label
        htmlFor={name.toLowerCase()}
        className="w-full mb-2.5 leading-3 font-normal text-gray300"
      >
        {name} {required && <span className="text-redprimary">*</span>}
      </label>
      {type === "password" ? (
        <InputPassword name={name} />
      ) : (
        <div className="w-full h-9">
          <input
            type={type}
            className="w-full h-full px-3 border-2 border-solid rounded border-orangeprimary"
            id={name.toLowerCase()}
            name={name.toLowerCase()}
            placeholder={name}
          />
        </div>
      )}
      {description !== "" && (
        <p className="w-full text-bghours">{description}</p>
      )}
    </div>
  );
};
