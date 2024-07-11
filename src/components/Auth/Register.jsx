import imgBrand from "../../assets/Brand.png";
import { Form } from "./Form";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <div className="mb-56">
        <div className="bg-gradient-red h-80 static text-5xl font-lato">
          <div className="flex flex-col items-center justify-center relative top-16">
            <img src={imgBrand} alt="imagen marca flowento" />
            <p>Flowento</p>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <Form />
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Ya tenes Cuenta?
          <Link to={"/"}>
            <span className='className="font-semibold leading-6 text-orangeprimary hover:text-orangesecondary"'>
              Login
            </span>
          </Link>
        </p>
      </div>
    </>
  );
};
