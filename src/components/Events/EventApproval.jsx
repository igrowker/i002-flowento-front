import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCalendarCheck, BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
import "swiper/swiper-bundle.css";
import Imagen1 from "../../assets/imagen1.webp";
import Imagen2 from "../../assets/imagen2.webp";
import Imagen3 from "../../assets/imagen3.webp";
import Imagen4 from "../../assets/imagen4.webp";
import Imagen5 from "../../assets/imagen5.webp";
import Imagen6 from "../../assets/imagen6.webp";
import FloatingButton from "./FloatingButton";
import { Navigation } from "swiper/modules";
import SwiperNavigation from "./SwiperNavigation";


const EventApproval = () => {
  const [activeButton, setActiveButton] = useState("todos");

  const eventos = [
    {
      id: 7,
      titulo:
        "Desayuno sostenibilidad: 'cuando el propósito tiene más bla-bla-bla que...'",
      fecha: "04/10/2026",
      hora: "09:00",
      ubicacion: "Inno",
      estado: "pendientes",
      imagen: Imagen1,
      precio: "gratuito",
    },
    {
      id: 8,
      titulo: "Desayuno RRHH: más de 90 medidad RRHH para una mediana empresa",
      fecha: "05/10/2025",
      hora: "09:00",
      ubicacion: "ScaleUp",
      estado: "organizado",
      imagen: Imagen2,
      precio: "50",
    },
    {
      id: 9,
      titulo: "Open Day Master",
      fecha: "18/10/2024",
      hora: "09:00",
      ubicacion: "Inno/Online",
      estado: "inscrito",
      imagen: Imagen3,
      precio: "gratuito",
    },
    {
      id: 10,
      titulo:
        "Webinar online: ¿Cómo aplicar la agilidad para crear más valor en tu...",
      fecha: "24/07/2023",
      hora: "10:00",
      ubicacion: "Online",
      estado: "finalizado",
      imagen: Imagen4,
      precio: "100",
    },
    {
      id: 11,
      titulo: "Cómo convertir los datos en información útil",
      fecha: "20/07/2022",
      hora: "09:30",
      ubicacion: "Online",
      estado: "pendientes",
      imagen: Imagen5,
      precio: "100",
    },

    {
      id: 12,
      titulo: "Hackaton Desafía tus límites con Nike",
      fecha: "01/07/2024",
      hora: "09:00",
      ubicacion: "Salón de universitarios - 370",
      estado: "pendientes",
      imagen: Imagen6,
      precio: "200",
    },
  ];

  const getEventosFiltradosYOrdenados = () => {
    let eventosFiltrados = [];

    if (activeButton === "pendientes") {
      eventosFiltrados = eventos.filter(
        (evento) => evento.estado === "pendientes"
      );
    } else if (activeButton === "organizado") {
      eventosFiltrados = eventos.filter(
        (evento) => evento.estado === "organizado"
      );
    } else if (activeButton === "inscrito") {
      eventosFiltrados = eventos.filter(
        (evento) => evento.estado === "inscrito"
      );
    } else if (activeButton === "finalizado") {
      eventosFiltrados = eventos.filter(
        (evento) => evento.estado === "finalizado"
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
        <div className="flex flex-col justify-between w-full mb-6 lg:mb-4 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="gap-4 px-4 text-xl font-bold md:text-3xl title-font gradient-red">
              {activeButton === "pendientes"
                ? "Eventos Pendientes de Aprobación"
                : activeButton === "organizado"
                ? "Eventos Organizados"
                : activeButton === "inscrito"
                ? "Eventos Inscritos"
                : activeButton === "finalizado"
                ? "Eventos Finalizados"
                : "Todos los eventos"}
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 px-4 py-2 lg:justify-end lg:w-1/2">
            <button
              className={`py-1 px-4 rounded-3xl transition-colors ${
                activeButton === "pendientes"
                  ? "bg-orangeprimary text-white hover:bg-orange-600"
                  : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
              } transition-all duration-400`}
              onClick={() => setActiveButton("pendientes")}
            >
              Pendientes
            </button>
            <button
              className={`py-1 px-4 rounded-3xl transition-colors ${
                activeButton === "organizado"
                  ? "bg-orangeprimary text-white hover:bg-orange-600"
                  : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
              } transition-all duration-400`}
              onClick={() => setActiveButton("organizado")}
            >
              Organizado
            </button>
            <button
              className={`py-1 px-4 rounded-3xl transition-colors ${
                activeButton === "inscrito"
                  ? "bg-orangeprimary text-white hover:bg-orange-600"
                  : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
              } transition-all duration-400`}
              onClick={() => setActiveButton("inscrito")}
            >
              Inscrito
            </button>
            <button
              className={`py-1 px-4 rounded-3xl transition-colors ${
                activeButton === "finalizado"
                  ? "bg-orangeprimary text-white hover:bg-orange-600"
                  : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
              } transition-all duration-400`}
              onClick={() => setActiveButton("finalizado")}
            >
              Finalizados
            </button>
            <button
              className={`py-1 px-4 rounded-3xl transition-colors ${
                activeButton === "todos"
                  ? "bg-orangeprimary text-white hover:bg-orange-600"
                  : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
              } transition-all duration-400`}
              onClick={() => setActiveButton("todos")}
            >
              Todos
            </button>
          </div>
        </div>

        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={1}
          centeredSlides={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={getEventosFiltradosYOrdenados.length > 4}
          speed={200}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              loop: getEventosFiltradosYOrdenados.length > 2,
            },
            1024: {
              slidesPerView: 3,
              loop: getEventosFiltradosYOrdenados.length > 3,
            },
            1920: {
              slidesPerView: 4,
              loop: true,
            },
          }}
          modules={[Navigation]}
        >
          {getEventosFiltradosYOrdenados().map((evento) => (
            <SwiperSlide key={evento.id} className="w-full px-8 pb-4">
              <div
                className="relative p-3 bg-gray-50 rounded-3xl"
                style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
              >
                {evento.estado === "pendientes" && (
                  <div
                    className="absolute font-bold text-white uppercase rounded-lg top-5 left-5 bg-redapproval"
                    style={{ padding: "1px 10px", fontSize: "9px" }}
                  >
                    <p>Pendiente de Aprobación</p>
                  </div>
                )}

                {evento.estado === "organizado" && (
                  <div
                    className="absolute font-bold text-white uppercase rounded-lg top-5 left-5 bg-orangeprimary"
                    style={{ padding: "1px 10px", fontSize: "9px" }}
                  >
                    <p>Organizado</p>
                  </div>
                )}

                {evento.estado === "inscrito" && (
                  <div
                    className="absolute font-bold text-white uppercase bg-green-500 rounded-lg top-5 left-5"
                    style={{ padding: "1px 10px", fontSize: "9px" }}
                  >
                    <p>Inscrito</p>
                  </div>
                )}

                {evento.estado === "finalizado" && (
                  <div
                    className="absolute font-bold text-white uppercase rounded-lg top-5 left-5 bg-gradient-red"
                    style={{ padding: "1px 10px", fontSize: "9px" }}
                  >
                    <p>Finalizado</p>
                  </div>
                )}

                <img
                  className="object-cover object-center w-full max-h-72 mb-3 rounded-2xl"
                  src={evento.imagen}
                  alt="content"
                  loading="lazy"
                />

                <h2 className="mb-4 text-sm font-bold text-justify md:text-base gradient-red">
                  <Link to={`/eventDetail/${evento.id}`}>{evento.titulo}</Link>
                </h2>

                <div className="flex justify-between pb-3 text-gray-500 font-lato">
                  <div className="flex gap-1">
                    <BsCalendarCheck className="text-orangeprimary" />
                    <p className="flex text-xs">{evento.fecha}</p>
                  </div>
                  <div className="flex gap-1">
                    <BsClock className="text-orangeprimary" />
                    <p className="flex text-xs">{evento.hora} h</p>
                  </div>
                </div>
                <div className="flex justify-between text-gray-500 font-lato">
                  <div className="flex gap-1">
                    <GoLocation className="text-orangeprimary" />
                    <p className="flex text-xs">{evento.ubicacion}</p>
                  </div>
                  <div className="flex gap-1">
                    <BiDollar className="text-orangeprimary" />
                    <p className="flex text-xs">
                      {evento.precio === "gratuito"
                        ? "Gratuito"
                        : `${evento.precio} $`}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {getEventosFiltradosYOrdenados() && <SwiperNavigation />}
        </Swiper>
        <FloatingButton/>
      </div>
    </>
  );
};

export default EventApproval;
