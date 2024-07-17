import "tailwindcss/tailwind.css";
import logow from "../../assets/logow.png";
import google from "../../assets/google.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import flowento from "../../assets/flowento.png"

const InputLogin = () => {
  return (
    <>
      <div className=" flex flex-col justify-center h-screen px-6 py-12 font-sans lg:px-8 bg-no-repeat bg-cover bg-[url('../src/assets/Rectangle1.png')]">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="w-auto mx-auto border rounded-full shadow-2xl h-60"
            src={logow}
            alt="Flowento"
          />
          <img
              className="w-auto mx-auto"
              src={flowento}
              alt="Flowento"
            />
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <h1 className="mt-1 text-2xl leading-9 tracking-tight text-center text-gray-900 font-lato">
            Flowento
          </h1> */}


          

          <h5 className="mt-1 leading-9 tracking-tight text-center text-gray-300">
            Registrate o inicia sesión para incribirte a un evento en HdE
          </h5>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-3xl bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                <FaFacebook className="text-indigo-500 w-7 h-7 mr-7" />
                Ingrese con Facebook
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-3xl bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <img className="w-8 h-7 mr-9" src={google} alt="google" />
                Ingrese con Google
              </button>
            </div>

            <div>
              <Link to="/Login">
                <button
                  type="button"
                  className="flex w-full bg-orangeprimary justify-center rounded-3xl px-3 py-1.5 text-sm font-semibold leading-6 text-black  shadow-md hover:bg-orange-600 hover:text-white"
                >
                  <div className="flex items-center justify-center w-8 h-8 mr-8 rounded-full bg-orangesecondary">
                    <MdEmail className="object-cover w-5 h-5 text-white" />
                  </div>
                  Ingrese con su email
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputLogin;
