import React from 'react'
import Error404 from "../assets/Error404.webp";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
    <div className="flex flex-col justify-center min-h-full px-6 py-12 font-sans lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h1 className="mt-1 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            ¡Ooops!
            </h1>

            <h5 className="mt-1 leading-9 tracking-tight text-center text-gray-500">¡Algo ha ocurrido!</h5>
            <h5 className="mt-1 leading-9 tracking-tight text-center text-gray-500">No sabemos que ha podido pasar, pero lo arreglaremos...</h5>
            
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm from-white to-orangeprimary">
            <img className="w-auto mx-auto rounded-lg h-60 " src={Error404} alt="Flowento" />
        </div> 

        <div>
             <h5 className="mt-1 leading-9 tracking-tight text-center text-gray-500">No pasa nada, te volvemos a indicar el camino a casa...</h5>
        </div>

        <div className='flex justify-center'>
            <Link to="/">
                <button
                    type="submit"
                    className="flex w-40 text-center justify-center rounded-3xl bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orangesecondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Volver al Inicio
                </button>
            </Link>
        </div>
        
    </div>
    </>
  )
}

export default Error