import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperNavigation from "./SwiperNavigation";
import { BsCalendarCheck } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
import "swiper/swiper-bundle.css";
import EventButton from "./EventButton";
import eventos from "./Event";
import { FaRegClock } from "react-icons/fa";

export const EventCard = () => {
  const [activeButton, setActiveButton] = useState("todos");

  const eventosFiltrados = useMemo(() => {
    let filteredEvents = [];
    if (activeButton === "proximos") {
      filteredEvents = eventos.filter((evento) => evento.estado === "proximos");
    } else if (activeButton === "gratuitos") {
      filteredEvents = eventos.filter((evento) => evento.precio === "gratuito");
    } else if (activeButton === "de_pago") {
      filteredEvents = eventos.filter((evento) => evento.precio !== "gratuito");
    } else if (activeButton === "finalizado") {
      filteredEvents = eventos.filter(
        (evento) => evento.estado === "finalizado"
      );
    } else {
      filteredEvents = eventos;
    }

    filteredEvents = filteredEvents.filter((evento) => evento.aprobado);
    filteredEvents.sort((a, b) => {
      const fechaA = new Date(a.fecha.split("/").reverse().join("-"));
      const fechaB = new Date(b.fecha.split("/").reverse().join("-"));
      if (fechaA.getTime() !== fechaB.getTime()) {
        return fechaA - fechaB;
      } else {
        return a.hora.localeCompare(b.hora);
      }
    });

    return filteredEvents;
  }, [activeButton]);

  const handleFilterChange = (buttonName) => {
    setActiveButton(buttonName);
  };

  const showNavigation = (slidesPerView) => {
    return eventosFiltrados.length > slidesPerView;
  };

  const now = new Date();

  eventos.forEach((evento) => {
    const eventoFecha = new Date(`${evento.fecha}T${evento.hora}:00`);

    if (eventoFecha < now) {
      evento.estado = "finalizado";
      evento.etiquetaHora = "FINALIZADO";
    } else {
      evento.estado = "proximos";
      if (evento.entradasDisponibles === 0) {
        evento.etiquetaEntradas = "PLAZAS AGOTADAS";
      } else if (
        evento.entradasDisponibles <= 15 &&
        evento.entradasDisponibles >= 1
      ) {
        evento.etiquetaEntradas = "ÚLTIMAS PLAZAS";
      }
      if (
        eventoFecha.getDate() === now.getDate() &&
        eventoFecha.getMonth() === now.getMonth() &&
        eventoFecha.getFullYear() === now.getFullYear() &&
        eventoFecha > now
      ) {
        evento.etiquetaHora = "ÚLTIMAS HORAS";
      }
    }
  });

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
              : "Todos los Eventos"}
          </h1>
        </div>
        <EventButton eventos={eventos} onFilterChange={handleFilterChange} />
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
        loop={eventosFiltrados.length > 4}
        speed={200}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            loop: eventosFiltrados.length > 2,
          },
          1024: {
            slidesPerView: 3,
            loop: eventosFiltrados.length > 3,
          },
          1920: {
            slidesPerView: 4,
            loop: true,
          },
        }}
        modules={[Navigation]}
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
                className="object-cover object-center w-full mb-3 max-h-72 rounded-2xl"
                src={evento.imagen}
                alt="content"
                loading="lazy"
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
                  <FaRegClock className="text-orangeprimary" />
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
        {showNavigation(1) && <SwiperNavigation />}
      </Swiper>
    </>
  );
};
