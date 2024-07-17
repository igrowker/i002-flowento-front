import "tailwindcss/tailwind.css";
import logow from "../../assets/logow.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState(true);
  const form = useRef(null);

  const login = (e) => {
    e.preventDefault();

    setData(false);

    const data = new FormData(form.current);

    const obj = {};

    data.forEach((value, key) => (obj[key] = value));

    //FORMA CON FETCH
    // fetch("https://i002-flowento-back-1.onrender.com/auth/login", {
    //   method: "POST",
    //   body: JSON.stringify(obj),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then(result => result.json())
    // .then(json => {
    //     console.log(json);
    // })

    //FORMA AXIOS 1
    axios({
      method: "POST",
      // url: "http://localhost:8080/auth/login",
      url : "https://i002-flowento-back-1.onrender.com/auth/login",
      data: {
        email: obj["email"],
        password: obj["password"],
      }
    })
      .then((response) => {
        const { data } = response;

        //deje algunos console log para q vean q les llega desde el back
        console.log(response);
        console.log(data);

        if (data.status === "success") {
          alert("Te logueaste con exito");
        } else {
          alert("alguno de los datos es incorrecto"); //en la data el mensaje puede ser mas perzonalizado
        }

        setData(true);

        navigate('/event-list');
      })
      .catch(function (error) {
        console.log(error);
        const { response } = error;
        const { data } = response;

        alert(data.payload);
        setData(true);
      })

    //FORMA AXIOS 2
    // axios
    //   .post("https://i002-flowento-back-1.onrender.com/auth/login", {
    //     email: obj["email"],
    //     password: obj["password"],
    //   })
    //   .then((response) => {
    //     const { data } = response;

    //     //deje algunos console log para q vean q les llega desde el back
    //     console.log(response);
    //     console.log(data);

    //     if (data.status === "success") {
    //       alert("Te logueaste con exito");
    //     } else {
    //       alert("alguno de los datos es incorrecto"); //en la data el mensaje puede ser mas perzonalizado
    //     }
    // setData(true);
    // navigate('/event-list');
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     const { response } = error;
    //     const { data } = response;

    //     alert(data.payload);
    //   })
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-full px-6 py-12 font-lato lg:px-8 bg-no-repeat bg-cover bg-[url('../src/assets/Rectangle1.png')]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="w-auto mx-auto border rounded-full shadow-2xl h-60" src={logow} alt="Flowento" />

          <h2 className="mt-1 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Plataforma de eventos de
          </h2>
          <h1 className="font-bold text-center text-orangeprimary text-7xl ">
            HdE
          </h1>
        </div>

        <div className="mt-10 text-center sm:mx-auto sm:w-full sm:max-w-sm">
          <form ref={form} className="space-y-6" onSubmit={(e) => login(e)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-left text-gray-900"
              >
                Correo Electrónico
              </label>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder=" Ingrese su email"
                  required
                  className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <Link to={"/password-reset"}>
                    <span className="font-semibold text-orangeprimary hover:text-orangesecondary">He olvidado mi Contraseña</span>
                  </Link>
                  {/* <a
                    href="/password-reset"
                    className="font-semibold text-orangeprimary hover:text-orangesecondary"
                  >
                    He olvidado mi Contraseña
                  </a> */}
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder=" Ingrese su contraseña"
                  required
                  className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              {data ? (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-3xl bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orangesecondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Acceder
                </button>
              ) : (
                <div>...loading</div>
              )}
            </div>
          </form>

          <p className="mt-10 text-sm text-center text-gray-500">
            No tienes Cuenta?
            <Link to={"/register"}>
              <span className="pl-2 font-semibold leading-6 text-orangeprimary hover:text-orangesecondary">
                Registrate
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
