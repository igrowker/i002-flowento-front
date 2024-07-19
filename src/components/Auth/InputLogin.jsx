import PropTypes from "prop-types";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const InputLogin = ({ onNavigateToLogin }) => {
  return (
    <div className="flex flex-col justify-center px-6 py-10 font-sans lg:px-8">
      <h5 className="mt-2 text-xs font-bold tracking-tight text-center md:text-sm lg:text-lg">
        Regístrate o inicia sesión y <br />
        disfruta de todos los eventos
      </h5>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <button
            type="button"
            className="flex w-full justify-center text-center rounded-3xl bg-gray-300 px-3 py-1.5 text-sm font-semibold border-2 border-white leading-6 text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
          >
            <FaFacebook
              style={{ marginRight: "0.5rem", color: "#1877F2" }}
              className="mr-6 w-7 h-7"
            />
            Ingrese con Facebook
          </button>
          <button
            type="button"
            className="flex w-full justify-center text-center rounded-3xl bg-gray-300 px-3 py-1.5 text-sm font-semibold border-2 border-white leading-6 text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
          >
            <FcGoogle className="mr-6 w-7 h-7" />
            Ingrese con Google
          </button>
          <button
            type="button"
            className="flex w-full bg-orangeprimary justify-center items-center text-center rounded-3xl px-3 py-1.5 border-2 border-white text-sm font-semibold leading-6 text-black shadow-md hover:bg-orange-600 hover:text-white"
            style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
            onClick={onNavigateToLogin}
          >
            <MdEmail className="mr-6 text-white w-7 h-7" />
            Ingrese con su email
          </button>
        </form>
      </div>
      <Link to="/register" className="mt-2 text-sm text-center text-gray-500">
        <button
          type="button"
          className="font-semibold text-orangeprimary hover:text-orange-600"
        >
          Regístrate
        </button>
      </Link>
    </div>
  );
};

InputLogin.propTypes = {
  onNavigateToLogin: PropTypes.func.isRequired,
};

export default InputLogin;
