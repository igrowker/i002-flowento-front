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
import { useEffect } from "react";
import { useEvents } from "../../context/EventContext";

const EventUpComing = () => {
  const { events, setEvents } = useEvents();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/events/`;
        const response = await axios.get(url, { withCredentials: true });
        const { data } = response;
        const { payload } = data;
        const now = new Date();
        const today = now.toISOString().split("T")[0];
        const formattedEvents = payload
          .filter((event) => event.state === "approve")
          .map((event) => {
            const eventDate = new Date(event.start_date).toISOString().split("T")[0];
            const eventTime = new Date(`${event.start_date}T${event.hour}`).getTime();
            let estado = "aprobado";
            let etiquetaHora = "";
            let etiquetaEntradas = "";
            if (eventDate === today) {
              if (eventTime > now.getTime()) {
                etiquetaHora = "ÚLTIMAS HORAS";
              } else {
                estado = "finalizado";
                etiquetaHora = "FINALIZADO";
              }
            } else {
              if (event.current_capacity === 0) {
                etiquetaEntradas = "PLAZAS AGOTADAS";
              } else if (
                event.current_capacity <= 300 &&
                event.current_capacity >= 1
              ) {
                etiquetaEntradas = "ÚLTIMAS PLAZAS";
              }
            }
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
  }, [setEvents]);
  
  const getEventosDelDiaActual = () => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    return events.filter((evento) => {
      const eventDate = new Date(evento.fecha).toISOString().split("T")[0];
      const [eventoHora, eventoMinuto] = evento.hora.split(":").map(Number);
      const eventoTime = eventoHora * 60 + eventoMinuto;
      const currentTime = now.getHours() * 60 + now.getMinutes();
      return eventDate === today && eventoTime > currentTime;
    });
  };

  const eventosDelDiaActual = getEventosDelDiaActual();
  
  return (
    <>
      {eventosDelDiaActual.length > 0 && (
        <>
          <h2 className="px-4 mb-2 text-xl font-bold md:text-3xl title-font gradient-red md:mb-4">
            Último día... ¡No te los pierdas!
          </h2>
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={1}
            centeredSlides={false}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={eventosDelDiaActual.length > 4}
            speed={200}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                loop: eventosDelDiaActual.length > 2,
              },
              1024: {
                slidesPerView: 3,
                loop: eventosDelDiaActual.length > 3,
              },
              1920: {
                slidesPerView: 4,
                loop: eventosDelDiaActual.length > 4,
              },
            }}
            modules={[Navigation]}
          >
            {eventosDelDiaActual.map((evento) => (
              <SwiperSlide
                key={evento.id}
                className="w-full px-6 pb-4"
              >
                <div
                  className="relative p-3 bg-gray-50 rounded-3xl"
                  style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
                >
                  {evento.estado === "aprobado" && (
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
                  <Link to={`/event-detail/${evento.id}`}>
                    <img
                      className="object-cover object-center w-full mb-3 max-h-72 rounded-2xl"
                      src={evento.imagen}
                      alt="content"
                      loading="lazy"
                    />
                    <h2 className="mb-4 text-sm font-bold text-justify md:text-base gradient-red capitalize-first hover:text-orange-600">
                      {evento.titulo}
                    </h2>
                  </Link>
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
            {eventosDelDiaActual.length > 0 && <SwiperNavigation />}
          </Swiper>
        </>
      )}
    </>
  );
};

export default EventUpComing;
