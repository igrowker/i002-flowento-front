import { InputForm } from "./InputForm.jsx";
import inputInfo from "../../assets/js/resgister.js";
import { useState, useRef } from "react";
import axios from "axios";

export const Form = () => {
  const [data, setData] = useState(true);
  const form = useRef(null);

  const registrarse = (e) => {
    e.preventDefault();

    setData(false);

    const data = new FormData(form.current);
    const obj = {};

    data.forEach((value, key) => (obj[key] = value));

    console.log(obj);
    console.log("API URL:", process.env.REACT_APP_API_URL);

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/register`, {
        first_name: obj["nombre"],
        last_name: obj["apellido"],
        email: obj["email"],
        password: obj["contraseña"],
        passwordRepeat: obj["repite la contraseña"],
      })
      .then((response) => {
        const { data } = response;

        console.log(response);
        console.log(data);
        console.log(data.status, data.payload);

        if (data.status === "success") {
          alert("Te registraste con exito");
        } else {
          alert("alguno de los datos es incorrecto");
        }

        setData(true);
      })
      .catch(function (error) {
        const { response } = error;
        const { data } = response;

        alert(data.payload);

        setData(true);
      });
  };

  return (
    <form ref={form} onSubmit={(e) => registrarse(e)}>
      {inputInfo.map((value, index) => (
        <InputForm
          key={index}
          name={value.name}
          type={value.type}
          required={value.required}
        />
      ))}
      <div className="flex justify-center">
        {data ? (
          <input
            type="submit"
            value="Regístrate"
            className="px-3 py-2 mt-3 text-sm font-semibold leading-6 text-white border-2 border-white shadow-sm md:text-base rounded-3xl bg-orangeprimary hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
          />
        ) : (
          <div
            className="px-3 py-2 mt-3 text-sm font-semibold leading-6 text-white border-2 border-white shadow-sm md:text-base rounded-3xl bg-orangeprimary hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
          >
            ..Cargando
          </div>
        )}
      </div>
    </form>
  );
};
