import PropTypes from "prop-types";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import DiagonalBackground from "./DiagonalBackground";
import Header from "./Header";

const InputLogin = ({ onNavigateToLogin }) => {
  return (
    <>
      <div className="index-container">
        <DiagonalBackground />
        <Header />
        <div className="flex flex-col justify-center font-sans">
          <h5 className="mt-2 text-xs font-bold tracking-tight text-center md:text-sm lg:text-lg">
            Regístrate o inicia sesión y <br />
            disfruta de todos los eventos
          </h5>
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <button
                type="button"
                className="flex w-80 justify-center text-center rounded-3xl bg-gray-300 px-3 py-1.5 text-sm font-semibold border-2 border-white leading-6 text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
              >
                <FaFacebook
                  style={{ marginRight: "0.5rem", color: "#1877F2" }}
                  className="w-8 mr-6 h-7"
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
              <Link to="/login">
                <button
                  type="button"
                  className="flex mt-6 w-full bg-orangeprimary justify-center items-center text-center rounded-3xl px-3 py-1.5 border-2 border-white text-sm font-semibold leading-6 text-black shadow-md hover:bg-orange-600 hover:text-white"
                  style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
                  onClick={onNavigateToLogin}
                >
                  <MdEmail className="mr-6 text-white w-7 h-7" />
                  Ingrese con su email
                </button>
              </Link>
            </form>
          </div>
          <Link
            to="/register"
            className="mt-2 text-sm text-center text-gray-500"
          >
            <button
              type="button"
              className="font-semibold text-orange-600 hover:text-orangeprimary"
            >
              Regístrate
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

InputLogin.propTypes = {
  onNavigateToLogin: PropTypes.func.isRequired,
};

export default InputLogin;
