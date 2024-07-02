import "tailwindcss/tailwind.css";
import logow from "../../assets/logow.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiSocialGooglePlusCircular } from "react-icons/ti";

const InputLogin = () => {
  return (
    <>
    <div className="flex min-h-full flex-col font-sans  justify-center px-6 py-12 lg:px-8">

    <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-gradient-to-tl from-white to-orangeprimary">
        <img className="mx-auto h-60 border w-auto rounded-full shadow-2xl" src={logow} alt="Flowento" />
    </div> 

    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
        <h1 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Flowento
        </h1>

        <h5 className="mt-1 text-center   leading-9 tracking-tight text-gray-300">Registrate o inicia sesión para incribirte a un evento en HdE</h5>
       
        
    </div>


    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          
        <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
            <FaFacebook className="text-indigo-500 w-7 h-7 mr-7"/>
           
              Ingrese con Facebook
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <TiSocialGooglePlusCircular className="text-red-600 w-8 h-8 mr-9"/>  
             Ingrese con Google
            </button>
          </div>
         
          <div>
          <Link to="/Login">
            <button 
              type="button"
              className="flex w-full border justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-black  shadow-md hover:bg-orangesecondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
                <div className=" bg-orangeprimary  rounded-full flex justify-center items-center w-8 h-8 mr-8">
                    <MdEmail className="text-white object-cover w-5 h-5 "/>
                </div>
              Ingrese con su email
            </button>
            </Link>
          </div>
        </form>

        
      </div>
    </div>
  </>
  )
}

export default InputLogin