import { useState } from "react";
import { BsCalendarCheck, BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Imagen1 from "../../assets/imagen1.webp";
import Imagen2 from "../../assets/imagen2.webp";
import Imagen3 from "../../assets/imagen3.webp";
import Imagen4 from "../../assets/imagen4.webp";
import Imagen5 from "../../assets/imagen5.webp";
import { Link } from "react-router-dom";

export const EventList = () => {
  const [activeButton, setActiveButton] = useState("todos");

  const eventos = [
    {
      id: 1,
      titulo:
        "Desayuno sostenibilidad: 'cuando el propósito tiene más bla-bla-bla que...'",
      fecha: "04/10/2023",
      hora: "09:00",
      ubicacion: "Inno",
      estado: "proximos",
      imagen: Imagen1,
    },
    {
      id: 2,
      titulo: "Desayuno RRHH: más de 90 medidad RRHH para una mediana empresa",
      fecha: "05/10/2023",
      hora: "09:00",
      ubicacion: "ScaleUp",
      estado: "proximos",
      imagen: Imagen2,
    },
    {
      id: 3,
      titulo: "Open Day Master",
      fecha: "18/10/2023",
      hora: "09:00",
      ubicacion: "Inno/Online",
      estado: "proximos",
      imagen: Imagen3,
    },
    {
      id: 4,
      titulo:
        "Webinar online: ¿Cómo aplicar la agilidad para crear más valor en tu...",
      fecha: "24/07/2023",
      hora: "10:00",
      ubicacion: "Online",
      estado: "finalizados",
      imagen: Imagen4,
    },
    {
      id: 5,
      titulo: "Cómo convertir los datos en información útil",
      fecha: "20/07/2023",
      hora: "09:30",
      ubicacion: "Online",
      estado: "finalizados",
      imagen: Imagen5,
    },
  ];

  const getEventosFiltradosYOrdenados = () => {
    let eventosFiltrados = [];

    if (activeButton === "proximos") {
      eventosFiltrados = eventos.filter(
        (evento) => evento.estado === "proximos"
      );
    } else if (activeButton === "finalizados") {
      eventosFiltrados = eventos.filter(
        (evento) => evento.estado === "finalizados"
      );
    } else {
      eventosFiltrados = eventos;
    }

    eventosFiltrados.sort((a, b) => {
      const fechaA = new Date(a.fecha.split("/").reverse().join("-"));
      const fechaB = new Date(b.fecha.split("/").reverse().join("-"));
      if (fechaA.getTime() !== fechaB.getTime()) {
        return fechaA - fechaB;
      } else {
        return a.hora.localeCompare(b.hora);
      }
    });

    return eventosFiltrados;
  };

  return (
    <>
      <div className="container px-5 py-10 mx-auto font-lato">
        <div className="w-full mb-6 lg:mb-4 flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 w-full">
            <h1 className="font-bold text-xl md:text-3xl title-font gradient-red gap-4 px-4">
              {activeButton === "proximos"
                ? "Próximos eventos"
                : activeButton === "finalizados"
                ? "Eventos Finalizados"
                : "Todos los eventos"}
            </h1>
          </div>
          <div className="flex gap-4 px-4 py-2 lg:justify-end lg:w-1/2">
            <button
              className={`py-1 px-4 rounded-3xl ${
                activeButton === "proximos"
                  ? "bg-orangeprimary text-white"
                  : "bg-transparent text-orangeprimary"
              }`}
              onClick={() => setActiveButton("proximos")}
            >
              Próximos
            </button>
            <button
              className={`py-1 px-4 rounded-3xl ${
                activeButton === "finalizados"
                  ? "bg-orangeprimary text-white"
                  : "bg-transparent text-orangeprimary"
              }`}
              onClick={() => setActiveButton("finalizados")}
            >
              Finalizados
            </button>
            <button
              className={`py-1 px-4 rounded-3xl ${
                activeButton === "todos"
                  ? "bg-orangeprimary text-white"
                  : "bg-transparent text-orangeprimary"
              }`}
              onClick={() => setActiveButton("todos")}
            >
              Todos
            </button>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {getEventosFiltradosYOrdenados().map((evento) => (
            <div key={evento.id} className="w-full xl:w-1/4 md:w-1/2 px-8 pb-4">
              <div className="bg-gray100 p-3 rounded-lg relative">
                {evento.estado === "proximos" && (
                  <>
                    <div
                      className="absolute top-5 left-5 bg-bghours text-white rounded-lg uppercase font-bold"
                      style={{ padding: "1px 8px", fontSize: "8px" }}
                    >
                      <p className="md:text-xs">Últimas plazas</p>
                    </div>
                    <div
                      className="absolute top-10 left-5 bg-orangeprimary text-white rounded-lg uppercase font-bold"
                      style={{ padding: "1px 10px", fontSize: "8px" }}
                    >
                      <p className="md:text-xs">Últimas horas</p>
                    </div>
                  </>
                )}

                {evento.estado === "finalizados" && (
                  <div
                    className="absolute top-5 left-5 bg-gradient-red text-white rounded-lg uppercase font-bold"
                    style={{ padding: "1px 8px", fontSize: "8px" }}
                  >
                    <p className="md:text-xs">Finalizado</p>
                  </div>
                )}

                <img
                  className="rounded-lg w-full h-auto object-cover object-center mb-3"
                  src={evento.imagen}
                  alt="content"
                />

                <h2 className="text-sm md:text-base gradient-red font-bold mb-4 text-justify">
                  <Link to="/">{evento.titulo}</Link>
                </h2>

                <div className="font-lato text-gray-500 flex justify-between">
                  <div className="flex gap-1">
                    <BsCalendarCheck className="text-orangeprimary" />
                    <p className="flex text-xs">{evento.fecha}</p>
                  </div>
                  <div className="flex gap-1">
                    <BsClock className="text-orangeprimary" />
                    <p className="flex text-xs">{evento.hora} h</p>
                  </div>
                  <div className="flex gap-1">
                    <GoLocation className="text-orangeprimary" />
                    <p className="flex text-xs">{evento.ubicacion}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
