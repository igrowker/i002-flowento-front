import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCalendarCheck } from "react-icons/bs";
import { Navigation } from "swiper/modules";
import { GoLocation } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
import "swiper/swiper-bundle.css";
import SwiperNavigation from "./SwiperNavigation";
import { FaEdit, FaRegClock } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import EventFilterButtons from "./EventFilterButtons";
import FloatingButton from "./FloatingButton";
import { useEvents } from "../../context/EventContext";

const EventApproval = () => {
  const { events, setEvents } = useEvents();
  const [activeButton, setActiveButton] = useState("todos");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/events/`;
        const response = await axios.get(url, { withCredentials: true });
        const { data } = response;
        const { payload } = data;
        const formattedEvents = payload.map((event) => {
          const today = new Date();
          let estado =
            event.state === "approve"
              ? "aprobado"
              : event.state === "pending"
              ? "pendiente"
              : event.state === "reject"
              ? "rechazado"
              : "rechazado";
          if (event.start_date < today) estado = "finalizado";
          return {
            id: event.id_event,
            titulo: event.name,
            fecha: event.start_date,
            hora: event.hour,
            ubicacion: event.location,
            imagen: event.image,
            precio: event.price > 0 ? `${event.price}` : "Gratuito",
            entradasDisponibles: event.current_capacity,
            estado,
            etiquetaEntradas: "",
            etiquetaHora: "",
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
  }, [setEvents]);

  const getEventosFiltradosYOrdenados = () => {
    let eventosFiltrados = [];

    if (activeButton === "pendiente") {
      eventosFiltrados = events.filter(
        (evento) => evento.estado === "pendiente"
      );
    } else if (activeButton === "aprobado") {
      eventosFiltrados = events.filter(
        (evento) => evento.estado === "aprobado"
      );
    } else if (activeButton === "rechazado") {
      eventosFiltrados = events.filter(
        (evento) => evento.estado === "rechazado"
      );
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

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full mb-3 lg:mb-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h1 className="gap-4 px-4 text-xl font-bold md:text-3xl title-font gradient-red">
            {activeButton === "pendiente"
              ? "Eventos Pendientes de Aprobación"
              : activeButton === "aprobado"
              ? "Eventos Aprobados"
              : activeButton === "rechazado"
              ? "Eventos Rechazados"
              : activeButton === "finalizado"
              ? "Eventos Finalizados"
              : "Todos los Eventos"}
          </h1>
        </div>
        <EventFilterButtons onFilterChange={setActiveButton} />
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
        loop={getEventosFiltradosYOrdenados().length > 4}
        speed={200}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            loop: getEventosFiltradosYOrdenados().length > 2,
          },
          1024: {
            slidesPerView: 3,
            loop: getEventosFiltradosYOrdenados().length > 3,
          },
          1920: {
            slidesPerView: 4,
            loop: getEventosFiltradosYOrdenados() > 4,
          },
        }}
        modules={[Navigation]}
      >
        {getEventosFiltradosYOrdenados().map((evento) => (
          <SwiperSlide key={evento.id} className="w-full px-6 pb-4">
            <div
              className="relative p-3 bg-gray-50 rounded-3xl"
              style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
            >
              {evento.estado === "pendiente" && (
                <div
                  className="absolute font-bold text-white uppercase rounded-lg top-5 left-5 bg-orangeprimary"
                  style={{ padding: "1px 10px", fontSize: "9px" }}
                >
                  <p>Pendiente de Aprobación</p>
                </div>
              )}
              {evento.estado === "aprobado" && (
                <div
                  className="absolute font-bold text-white uppercase bg-green-500 rounded-lg top-5 left-5"
                  style={{ padding: "1px 10px", fontSize: "9px" }}
                >
                  <p>Aprobado</p>
                </div>
              )}
              {evento.estado === "rechazado" && (
                <div
                  className="absolute font-bold text-white uppercase bg-red-500 rounded-lg top-5 left-5"
                  style={{ padding: "1px 10px", fontSize: "9px" }}
                >
                  <p>Rechazado</p>
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
                className="object-cover object-center w-full mb-3 max-h-72 rounded-2xl"
                src={evento.imagen}
                alt="content"
                loading="lazy"
              />
              <div className="flex items-center justify-between w-full mb-4">
                <Link
                  to={`/event-detail/${evento.id}`}
                  className="flex-grow pr-8"
                >
                  <h2 className="text-sm font-bold text-justify md:text-base gradient-red capitalize-first hover:text-orange-600">
                    {evento.titulo}
                  </h2>
                </Link>

{/* Icono para añadir la logica de modificar el evento */}
                <div className="flex-shrink-0">
                  <FaEdit
                    onClick={() => {}}
                    className="transition-transform duration-500 cursor-pointer text-orangeprimary hover:text-orange-600 md:hover:scale-110"
                    size={20}
                  />
                </div>
              </div>

              <div className="flex justify-between pb-3 text-gray-500 font-lato">
                <div className="flex gap-1">
                  <BsCalendarCheck className="text-orangeprimary" />
                  <p className="flex text-xs">{evento.fecha}</p>
                </div>
                <div className="flex gap-1">
                  <FaRegClock className="text-orangeprimary" />
                  <p className="flex text-xs">{evento.hora}</p>
                </div>
              </div>
              <div className="flex justify-between text-gray-500 font-lato">
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
        {getEventosFiltradosYOrdenados() && <SwiperNavigation />}
      </Swiper>
      <FloatingButton />
    </>
  );
};

export default EventApproval;
