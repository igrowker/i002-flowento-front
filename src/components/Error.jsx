import React from 'react'
import Error404 from "../assets/Error404.png";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
    <div className="flex min-h-full flex-col font-sans  justify-center px-6 py-12 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h1 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ¡Ooops!
            </h1>

            <h5 className="mt-1 text-center   leading-9 tracking-tight text-gray-300">¡Algo ha ocurrido!</h5>
            <h5 className="mt-1 text-center   leading-9 tracking-tight text-gray-300">No sabemos que ha podido pasar, pero lo arreglaremos...</h5>
            
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm  from-white to-orangeprimary">
            <img className="mx-auto h-60 border w-auto rounded-full shadow-2xl" src={Error404} alt="Flowento" />
        </div> 

        <div>
             <h5 className="mt-1 text-center   leading-9 tracking-tight text-gray-300">No pasa nada, te volvemos a indicar el camino a casa...</h5>
        </div>

        <div className='flex justify-center'>
            <Link to="/">
                <button
                    type="submit"
                    className="flex w-30 text-center justify-center rounded-md bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orangesecondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Volver al Inicio
                </button>
            </Link>
        </div>
        
    </div>
    </>
  )
}

export default Error