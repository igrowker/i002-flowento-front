/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import btnMostrarContraseña from "../../assets/Boton-mostrar-contraseña.png";

export const InputPassword = ({ name }) => {

    const password = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='w-full flex items-center h-9 border-solid rounded border-2 border-gray300 '>
            <input ref={password} type={showPassword ? "text" : "password"} autoComplete='billing new-password' className="w-full px-3 h-full" id={name.toLowerCase()} name={name.toLowerCase()} placeholder={name} />
            <div className='cursor-pointer' onClick={()=>setShowPassword((prev)=>!prev)}>
                <img src={btnMostrarContraseña} alt='imagen mostrar contraseña' className='h-5 w-5 mr-1'/>
            </div>
        </div>
    )
}
