import Imagen1 from "../../assets/imagen1.webp";
import Imagen2 from "../../assets/imagen2.webp";
import Imagen3 from "../../assets/imagen3.webp";
import Imagen4 from "../../assets/imagen4.webp";
import Imagen5 from "../../assets/imagen5.webp";
import Imagen6 from "../../assets/imagen6.webp";

const eventos = [
  
  {
    id: 1,
    titulo: "Hackaton Desafía tus límites con Nike",
    fecha: "2024-07-05",
    hora: "23:00",
    ubicacion: "Salón de universitarios - 370",
    imagen: Imagen6,
    precio: 200,
    entradasDisponibles: 1,
    estado:"",
  },
  {
    id: 2,
    titulo: "Desayuno RRHH: más de 90 medidas RRHH para una mediana empresa",
    fecha: "2024-07-07",
    hora: "09:00",
    ubicacion: "ScaleUp",
    imagen: Imagen2,
    precio: 50,
    entradasDisponibles: 100,
    estado:"",
  },
  {
    id: 3,
    titulo: "Open Day Master",
    fecha: "2024-07-08",
    hora: "09:30",
    ubicacion: "Inno/Online",
    imagen: Imagen3,
    precio: "gratuito",
    entradasDisponibles: 100,
    estado:"",
  },
  {
    id: 4,
    titulo:
      "Webinar online: ¿Cómo aplicar la agilidad para crear más valor en tu...",
    fecha: "2024-07-09",
    hora: "10:00",
    ubicacion: "Online",
    imagen: Imagen4,
    precio: 100,
    entradasDisponibles: 0,
    estado:"",
  },
  {
    id: 5,
    titulo: "Cómo convertir los datos en información útil",
    fecha: "2024-07-04",
    hora: "10:30",
    ubicacion: "Online",
    imagen: Imagen5,
    precio: 200,
    entradasDisponibles: 5,
    estado:"",
  },
  {
    id: 6,
    titulo:
      "Desayuno sostenibilidad: 'cuando el propósito tiene más bla-bla-bla que...'",
    fecha: "2024-07-06",
    hora: "08:00",
    ubicacion: "Inno",
    imagen: Imagen1,
    precio: "gratuito",
    entradasDisponibles: 100,
    estado:"",
  },
];

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
    } else if (evento.entradasDisponibles <= 15 && evento.entradasDisponibles >= 1) {
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

export default eventos;
