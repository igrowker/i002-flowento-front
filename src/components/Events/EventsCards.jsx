import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCalendarCheck } from "react-icons/bs";
import { Navigation } from "swiper/modules";
import { GoLocation } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
import "swiper/swiper-bundle.css";
import SwiperNavigation from "./SwiperNavigation";
import { FaRegClock } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import EventButton from "./EventButton";

export const EventCard = () => {
  const [events, setEvents] = useState([]);
  const [activeButton, setActiveButton] = useState("todos");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/events/`;
        const response = await axios.get(url, { withCredentials: true });
        const { data } = response;
        const { payload } = data;

        const now = new Date();

        const formattedEvents = payload.map((event) => {
          const eventDate = new Date(event.start_date);
          const endDate = new Date(event.end_date);
          let estado = "aprobado";
          let etiquetaHora = "";
          let etiquetaEntradas = "";

          if (event.current_capacity === 0) {
            etiquetaEntradas = "PLAZAS AGOTADAS";
          } else if (
            event.current_capacity <= 700 &&
            event.current_capacity >= 1
          ) {
            etiquetaEntradas = "ÚLTIMAS PLAZAS";
          }
          if (endDate < now) {
            estado = "finalizado";
            etiquetaHora = "FINALIZADO";
          } else {
            if (
              eventDate.getDate() === now.getDate() &&
              eventDate.getMonth() === now.getMonth() &&
              eventDate.getFullYear() === now.getFullYear() &&
              eventDate > now
            ) {
              etiquetaHora = "ÚLTIMAS HORAS";
            }
          }

          return {
            id: event.id_event,
            titulo: event.name,
            fecha: eventDate.toLocaleDateString(),
            hora: new Date(event.start_date).toLocaleTimeString(),
            ubicacion: event.type,
            imagen: event.image,
            precio: event.price > 0 ? `$${event.price}` : "Gratuito",
            entradasDisponibles: event.current_capacity,
            estado,
            etiquetaEntradas,
            etiquetaHora,
          };
        });

        setEvents(formattedEvents);
      } catch (error) {
        const { response } = error;
        const { data } = response;
        alert(data.payload);
      }
    };

    fetchEvents();
  }, []);

  const getEventosFiltradosYOrdenados = () => {
    let eventosFiltrados = [];

    if (activeButton === "proximos") {
      eventosFiltrados = events.filter(
        (evento) => evento.estado === "proximos"
      );
    } else if (activeButton === "gratuitos") {
      eventosFiltrados = events.filter(
        (evento) => evento.precio === "gratuito"
      );
    } else if (activeButton === "de_pago") {
      eventosFiltrados = events.filter((evento) => evento.precio !== "de_pago");
    } else if (activeButton === "finalizado") {
      eventosFiltrados = events.filter(
        (evento) => evento.estado === "finalizado"
      );
    } else {
      eventosFiltrados = events;
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

  const eventosFiltradosYOrdenados = getEventosFiltradosYOrdenados();

  const handleFilterChange = (buttonName) => {
    setActiveButton(buttonName);
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    return `${hours}:${minutes}`;
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
              : "Todos los Eventos"}
          </h1>
        </div>
        <EventButton onFilterChange={handleFilterChange} />
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
        loop={eventosFiltradosYOrdenados.length > 4}
        speed={200}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            loop: eventosFiltradosYOrdenados.length > 2,
          },
          1024: {
            slidesPerView: 3,
            loop: eventosFiltradosYOrdenados.length > 3,
          },
          1920: {
            slidesPerView: 4,
            loop: eventosFiltradosYOrdenados.length > 4,
          },
        }}
        modules={[Navigation]}
      >
        {eventosFiltradosYOrdenados.map((evento) => (
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
                <Link to={`/event-detail/${evento.id}`}>{evento.titulo}</Link>
              </h2>
              <div className="flex justify-between pb-3 text-gray-500 font-lato">
                <div className="flex gap-1">
                  <BsCalendarCheck className="text-orangeprimary" />
                  <p className="flex text-xs">{evento.fecha}</p>
                </div>
                <div className="flex gap-1">
                  <FaRegClock className="text-orangeprimary" />
                  <p className="flex text-xs">{formatTime(evento.hora)}</p>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 font-lato">
                <div className="flex gap-1">
                  <GoLocation className="text-orangeprimary" />
                  <p className="flex text-xs">{evento.ubicacion}</p>
                </div>
                <div className="flex gap-1">
                  <BiDollar className="text-orangeprimary" />
                  <p className="flex text-xs">{evento.precio}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavigation />
      </Swiper>
    </>
  );
};
