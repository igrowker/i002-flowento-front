/* eslint-disable react/prop-types */
import { InputPassword } from './InputPassword';

export const InputForm = ({ name, type, required, description }) => {

  return (
    <div className="my-2.5 flex justify-center items-center flex-col">
      <label htmlFor={name.toLowerCase()} className="w-full mb-2.5 leading-3 font-normal text-gray300">
        {name} {required && <span className="text-redprimary">*</span>}
      </label>
      {
        type === "password" ? <InputPassword name={name} />
          : <div className='h-9 w-full'>
            <input type={type} className="w-full px-3 h-full border-solid rounded border-2 border-orangeprimary" id={name.toLowerCase()} name={name.toLowerCase()} placeholder={name} />
          </div>
      }
      {description !== "" && <p className='text-bghours w-full'>{description}</p>}
    </div>)
}