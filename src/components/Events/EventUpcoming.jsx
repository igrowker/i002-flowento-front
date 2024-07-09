import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCalendarCheck, BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
import "swiper/swiper-bundle.css";
import eventos from "./Event";

export const EvenUpComming = () => {
  const getEventosDelDiaActual = () => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const currentTime = now.getHours() * 60 + now.getMinutes();

    return eventos.filter((evento) => {
      const [eventoHora, eventoMinuto] = evento.hora.split(":").map(Number);
      const eventoTime = eventoHora * 60 + eventoMinuto;

      return (
        evento.fecha === today &&
        evento.estado === "proximos" &&
        eventoTime >= currentTime
      );
    });
  };

  return (
    <>
      <div className="">
        {getEventosDelDiaActual().length > 0 && (
          <>
            <h2 className="px-4 mb-2 text-xl font-bold md:text-3xl title-font gradient-red md:mb-4">
              Último día, no te lo pierdas
            </h2>
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
              {getEventosDelDiaActual().map((evento) => (
                <SwiperSlide key={evento.id}>
                  <div className="w-full px-8 pb-4">
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
                              {evento.etiquetaEntradas ===
                                "PLAZAS AGOTADAS" && <p>Plazas Agotadas</p>}
                            </div>
                          )}
                        </>
                      )}
                      <img
                        className="object-cover object-center w-full mb-3 rounded-2xl max-h-40"
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </>
  );
};
