import React, { useEffect, useState } from 'react';
import btnAtrasImg from "../../assets/Boton-Atras.png";
import avatarImg from "../../assets/Avatar.png";
import btnEditImg from "../../assets/Boton-Edit.png";
import { Form } from './Form';
import { Link } from 'react-router-dom';
import axios from 'axios';

// https://stackoverflow.com/questions/37457128/react-open-file-browser-on-click-a-div --> esto para q cuando se le de click a la imagen del editar imagen del avatar

export const Register = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/usuarios")
            .then(response => {
                // console.log(response);
                console.log(response.data);
                setData(response.data);
            });
    }, [])

    const añadirUsuario = () => {
        axios.post("http://localhost:8080/register", {
            first_name : "Tino",
            last_name : "Rodriguez",
            email : "tino@gmail.comm",
            password : "abc123",
            passwordRepeat : "abc123",
            birthDate : "2014-05-22",
            gender : "hombre",
            cell : "+54-2032452389",
            country : "Argentina"
        })
            .then(response => {
                const { data } = response;

                console.log(response.data);

                setData2(data);
            })
    }

    return (
        <>
            {data != [] && console.log(data)}
            {data2 != [] && console.log(data2)}
            <button onClick={añadirUsuario}>Añadir usuario de prueba</button>
            {/* este margin provicional xq como no esta completa la vista del register en figma nose si el footer se tiene q ver o no */}
            <div className='mb-56'>
                <div className='bg-gradient-red'>
                    <div className='ml-5 min-h-11 inset-y-10 flex items-center'>
                        <Link to={"/"}>
                            <img src={btnAtrasImg} alt='boton volver al login' />
                        </Link>
                    </div>
                </div>
                <div className='bg-orangesecondary  max-h-orangeModal'>
                    <div className='flex justify-center items-center flex-col'>
                        <div>
                            <img src={avatarImg} alt='imagen avatar usuario' className='relative top-8' />
                        </div>
                        <div>
                            <img src={btnEditImg} alt='imagen boton editar avatar' className='relative top-2' />
                            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className='hidden' />
                        </div>
                    </div>
                </div>
                <div className='container mx-auto px-6'>
                    <Form />
                </div>
            </div>
        </>
    )
}
