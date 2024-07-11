import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCalendarCheck, BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
import "swiper/swiper-bundle.css";
import EventButton from "./EventButton";
import eventos from "./Event";
import { useState } from "react";

export const EventCard = () => {
  const [activeButton, setActiveButton] = useState("todos");
  const [eventosFiltrados, setEventosFiltrados] = useState(eventos);

  const handleFilterChange = (buttonName) => {
    let filteredEvents = [];
    if (buttonName === "proximos") {
      filteredEvents = eventos.filter((evento) => evento.estado === "proximos");
    } else if (buttonName === "gratuitos") {
      filteredEvents = eventos.filter((evento) => evento.precio === "gratuito");
    } else if (buttonName === "de_pago") {
      filteredEvents = eventos.filter((evento) => evento.precio !== "gratuito");
    } else if (buttonName === "finalizado") {
      filteredEvents = eventos.filter(
        (evento) => evento.estado === "finalizado"
      );
    } else {
      filteredEvents = eventos;
    }
    filteredEvents.sort((a, b) => {
      const fechaA = new Date(a.fecha.split("/").reverse().join("-"));
      const fechaB = new Date(b.fecha.split("/").reverse().join("-"));
      if (fechaA.getTime() !== fechaB.getTime()) {
        return fechaA - fechaB;
      } else {
        return a.hora.localeCompare(b.hora);
      }
    });

    setEventosFiltrados(filteredEvents);
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full mb-3 lg:mb-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h1 className="gap-4 px-4 text-xl font-bold md:text-3xl title-font gradient-red">
            {activeButton === "proximos"
              ? "Próximos Eventos"
              : activeButton === "finalizado"
              ? "Eventos Finalizados"
              : activeButton === "gratuitos"
              ? "Eventos Gratuitos"
              : activeButton === "de_pago"
              ? "Eventos de Pago"
              : "Todos los eventos"}
          </h1>
        </div>
        <EventButton eventos={eventos} onFilterChange={handleFilterChange} />
      </div>
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={1}
        centeredSlides={false}
        navigation={false}
        loop={true}
        speed={200}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1920: {
            slidesPerView: 4,
          },
        }}
      >
        {eventosFiltrados.map((evento) => (
          <SwiperSlide key={evento.id} className="w-full px-8 pb-4">
            <div
              className="relative p-3 bg-gray-50 rounded-3xl"
              style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
            >
              {evento.estado === "proximos" && (
                <>
                  {evento.etiquetaHora === "ÚLTIMAS HORAS" && (
                    <div
                      className="absolute font-bold text-white uppercase rounded-lg top-5 left-5 bg-orangeprimary"
                      style={{ padding: "1px 10px", fontSize: "9px" }}
                    >
                      <p>Últimas horas</p>
                    </div>
                  )}
                  {(evento.etiquetaEntradas === "ÚLTIMAS PLAZAS" ||
                    evento.etiquetaEntradas === "PLAZAS AGOTADAS") && (
                    <div
                      className="absolute font-bold text-white uppercase rounded-lg top-5 right-5 bg-bghours"
                      style={{ padding: "1px 10px", fontSize: "9px" }}
                    >
                      {evento.etiquetaEntradas === "ÚLTIMAS PLAZAS" && (
                        <p>Últimas plazas</p>
                      )}
                      {evento.etiquetaEntradas === "PLAZAS AGOTADAS" && (
                        <p>Plazas Agotadas</p>
                      )}
                    </div>
                  )}
                </>
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
                className="object-cover object-center w-full h-auto mb-3 rounded-2xl"
                src={evento.imagen}
                alt="content"
              />
              <h2 className="mb-4 text-sm font-bold text-justify md:text-base gradient-red">
                <Link to="/">{evento.titulo}</Link>
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
      </Swiper>
    </>
  );
};
