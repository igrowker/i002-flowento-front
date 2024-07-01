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

export const EventList = () => {
  const [activeButton, setActiveButton] = useState("todos");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

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
      precio: "gratuito",
    },
    {
      id: 2,
      titulo: "Desayuno RRHH: más de 90 medidas RRHH para una mediana empresa",
      fecha: "05/10/2023",
      hora: "09:00",
      ubicacion: "ScaleUp",
      estado: "proximos",
      imagen: Imagen2,
      precio: "50",
    },
    {
      id: 3,
      titulo: "Open Day Master",
      fecha: "18/10/2023",
      hora: "09:00",
      ubicacion: "Inno/Online",
      estado: "proximos",
      imagen: Imagen3,
      precio: "gratuito",
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
      precio: "100",
    },
    {
      id: 5,
      titulo: "Cómo convertir los datos en información útil",
      fecha: "20/07/2023",
      hora: "09:30",
      ubicacion: "Online",
      estado: "finalizados",
      imagen: Imagen5,
      precio: "200",
    },
    {
      id: 6,
      titulo: "Hackaton Desafía tus límites con Nike",
      fecha: "01/07/2024",
      hora: "09:00",
      ubicacion: "Salón de universitarios - 370",
      estado: "proximos",
      imagen: Imagen6,
      precio: "200",
    },
  ];

  const getEventosFiltradosYOrdenados = () => {
    let eventosFiltrados = [];

    if (activeButton === "proximos") {
      eventosFiltrados = eventos.filter(
        (evento) => evento.estado === "proximos"
      );
    } else if (activeButton === "gratuitos") {
      eventosFiltrados = eventos.filter(
        (evento) => evento.precio === "gratuito"
      );
    } else if (activeButton === "de_pago") {
      eventosFiltrados = eventos.filter(
        (evento) => evento.precio !== "gratuito"
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

  const getEventosDelDiaActual = () => {
    const today = new Date();
    const todayString = today.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return eventos.filter((evento) => evento.fecha === todayString);
  };

  return (
    <>
      <div className="container px-5 py-10 mx-auto font-lato">
        <div className="w-full mb-6 lg:mb-4 flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 w-full">
            <h1 className="font-bold text-xl md:text-3xl title-font gradient-red gap-4 px-4">
              {activeButton === "proximos"
                ? "Próximos Eventos"
                : activeButton === "finalizados"
                ? "Eventos Finalizados"
                : activeButton === "gratuitos"
                ? "Eventos Gratuitos"
                : activeButton === "de_pago"
                ? "Eventos de Pago"
                : "Todos los eventos"}
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 px-4 py-2 lg:justify-end lg:w-1/2">
            <button
              className={`py-1 px-4 rounded-3xl transition-colors ${
                activeButton === "todos"
                  ? "bg-orangeprimary text-white hover:bg-orange-600"
                  : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
              } transition-all duration-400`}
              onClick={() => handleButtonClick("todos")}
            >
              Todos
            </button>
            <button
              className={`py-1 px-4 rounded-3xl transition-colors ${
                activeButton === "gratuitos"
                  ? "bg-orangeprimary text-white hover:bg-orange-600"
                  : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
              } transition-all duration-400`}
              onClick={() => handleButtonClick("gratuitos")}
            >
              Gratuitos
            </button>
            <button
              className={`py-1 px-4 rounded-3xl transition-colors ${
                activeButton === "de_pago"
                  ? "bg-orangeprimary text-white hover:bg-orange-600"
                  : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
              } transition-all duration-400`}
              onClick={() => handleButtonClick("de_pago")}
            >
              De pago
            </button>
            <button
              className={`py-1 px-4 rounded-3xl transition-colors ${
                activeButton === "proximos"
                  ? "bg-orangeprimary text-white hover:bg-orange-600"
                  : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
              } transition-all duration-400`}
              onClick={() => handleButtonClick("proximos")}
            >
              Próximos
            </button>
            <button
              className={`py-1 px-4 rounded-3xl transition-colors ${
                activeButton === "finalizados"
                  ? "bg-orangeprimary text-white hover:bg-orange-600"
                  : "bg-bgbutton text-orangeprimary hover:bg-orangeprimary hover:text-white"
              } transition-all duration-400`}
              onClick={() => handleButtonClick("finalizados")}
            >
              Finalizados
            </button>
          </div>
        </div>

        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={1}
          centeredSlides={true}
          navigation={false}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {getEventosFiltradosYOrdenados().map((evento) => (
            <SwiperSlide key={evento.id} className="w-full px-8 pb-4">
              <div
                className="bg-gray-50 rounded-3xl p-3 relative"
                style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
              >
                {evento.estado === "proximos" && (
                  <>
                    <div
                      className="absolute top-5 left-5 bg-orangeprimary text-white rounded-lg uppercase font-bold"
                      style={{ padding: "1px 10px", fontSize: "8px" }}
                    >
                      <p className="md:text-xs">Últimas horas</p>
                    </div>
                    <div
                      className="absolute top-5 right-5 bg-bghours text-white rounded-lg uppercase font-bold"
                      style={{ padding: "1px 8px", fontSize: "8px" }}
                    >
                      <p className="md:text-xs">Últimas plazas</p>
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
                  className="rounded-2xl w-full max-h-40 object-cover object-center mb-3"
                  src={evento.imagen}
                  alt="content"
                />

                <h2 className="text-sm md:text-base gradient-red font-bold mb-4 text-justify">
                  <Link to="/">{evento.titulo}</Link>
                </h2>

                <div className="font-lato text-gray-500 pb-3 flex justify-between">
                  <div className="flex gap-1">
                    <BsCalendarCheck className="text-orangeprimary" />
                    <p className="flex text-xs">{evento.fecha}</p>
                  </div>
                  <div className="flex gap-1">
                    <BsClock className="text-orangeprimary" />
                    <p className="flex text-xs">{evento.hora} h</p>
                  </div>
                </div>
                <div className="font-lato text-gray-500 flex justify-between">
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
        </Swiper>

        {getEventosDelDiaActual().length > 0 && (
          <div className="mt-10">
            <h2 className="font-bold text-xl md:text-3xl title-font gradient-red gap-4 px-4">
              Último día, no te lo pierdas
            </h2>
            <Swiper
              className="mySwiper"
              slidesPerView={1}
              spaceBetween={1}
              centeredSlides={true}
              navigation={false}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {getEventosDelDiaActual().map((evento) => (
                <SwiperSlide key={evento.id}>
                  <div className="w-full px-8 pb-4">
                    <div
                      className="bg-gray-50 rounded-3xl p-3 relative"
                      style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
                    >
                      {evento.estado === "proximos" && (
                        <>
                          <div
                            className="absolute top-5 left-5 bg-orangeprimary text-white rounded-lg uppercase font-bold"
                            style={{ padding: "1px 10px", fontSize: "8px" }}
                          >
                            <p className="md:text-xs">Últimas horas</p>
                          </div>
                          <div
                            className="absolute top-5 right-5 bg-bghours text-white rounded-lg uppercase font-bold"
                            style={{ padding: "1px 8px", fontSize: "8px" }}
                          >
                            <p className="md:text-xs">Últimas plazas</p>
                          </div>
                        </>
                      )}

                      <img
                        className="rounded-2xl w-full max-h-40 object-cover object-center mb-3"
                        src={evento.imagen}
                        alt="content"
                      />

                      <h2 className="text-sm md:text-base gradient-red font-bold mb-4 text-justify">
                        <Link to="/">{evento.titulo}</Link>
                      </h2>

                      <div className="font-lato text-gray-500 pb-3 flex justify-between">
                        <div className="flex gap-1">
                          <BsCalendarCheck className="text-orangeprimary" />
                          <p className="flex text-xs">{evento.fecha}</p>
                        </div>
                        <div className="flex gap-1">
                          <BsClock className="text-orangeprimary" />
                          <p className="flex text-xs">{evento.hora} h</p>
                        </div>
                      </div>
                      <div className="font-lato text-gray-500 flex justify-between">
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </>
  );
};
