import Header from "./Header";
import DiagonalBackground from "./DiagonalBackground";
import { Form } from "./Form";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="index-container">
      <DiagonalBackground/>
      <Header />
      <div className="container px-6 mx-auto">
        <Form />
        </div>

      <div className="flex justify-between gap-16 mt-2">
        <span className="text-orangeprimary">
          ¿Ya tienes una cuenta?
        </span>

        <Link to={"/"}>
          <button
            type="button"
            className="font-semibold text-orangeprimary hover:text-orange-600"
          >
            Inicia Sesión
          </button>
        </Link>
      </div>
    </div>
  );
};
