/* eslint-disable react/prop-types */
import React from 'react';
import btnMostrarContraseña from "../../assets/Boton-mostrar-contraseña.png";


export const InputPassword = ({name,type}) => {
    return (
        <div className='w-full flex items-center h-9 border-solid rounded border-2 border-gray300 '>
            <input type={type} autoComplete='billing new-password' className="w-full px-3 h-full" id={name.toLowerCase()} name={name.toLowerCase()} placeholder={name} />
            <img src={btnMostrarContraseña} alt='boton mostrar contraseña' className='h-5 w-5 mr-1' />
        </div>
    )
}
