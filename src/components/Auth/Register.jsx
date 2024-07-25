import Header from "./Header";
import DiagonalBackground from "./DiagonalBackground";
import { Form } from "./Form";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="index-container">
      <DiagonalBackground />
      <Header />
      <div className="container px-6 w-86">
        <Form />
      </div>

      <div className="flex justify-between gap-20 mt-3 text-sm">
        <span className="text-orange-600">¿Ya tienes una cuenta?</span>

        <Link to={"/"}>
          <button
            type="button"
            className="font-semibold text-orange-600 hover:text-orangeprimary"
          >
            Inicia Sesión
          </button>
        </Link>
      </div>
    </div>
  );
};
