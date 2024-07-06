import { InputForm } from "./InputForm.jsx"
import inputInfo from '../../assets/js/resgister.js';
import { useState, useRef } from "react";
import axios from 'axios';

export const Form = () => {

    const [data, setData] = useState(true);
    const form = useRef(null);

    const registrarse = (e) => {
        e.preventDefault();

        setData(false)

        const data = new FormData(form.current);

        const obj = {};

        data.forEach((value, key) => obj[key] = value);
        

        axios.post("http://localhost:8080/auth/register", {
            first_name: obj["nombre"],
            last_name: obj["apellido"],
            email: obj["email"],
            password: obj["contraseña"],
            passwordRepeat: obj["repita la contraseña"]
        })
            .then(response => {
                const { data } = response;

                console.log(response);
                console.log(data);

                if (data.status === "success") {
                    alert("Te registraste con exito");
                }
                else{
                    alert("alguno de los datos es incorrecto"); //en la data el mensaje puede ser mas perzonalizado
                }


                setData(true)

            })
    }

    return (
        <form ref={form} className=" mt-36   flex flex-col" onSubmit={(e) => registrarse(e)}>
            {inputInfo.map((value, index) => <InputForm key={index} name={value.name} type={value.type} required={value.required} description={value.description} />
            )}
            <div>
                {
                    data ? <input type="submit" value="Registrarse" className="flex w-full justify-center rounded-md bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orangesecondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" /> : <div>...loading</div>
                }
            </div>
        </form>
    )
}