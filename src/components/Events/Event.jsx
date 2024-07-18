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
    fecha: "2024-07-18",
    hora: "23:59",
    ubicacion: "Salón de universitarios - 370",
    imagen: Imagen6,
    precio: 200,
    entradasDisponibles: 1,
    aprobado: true,
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
  {
    id: 2,
    titulo: "Desayuno RRHH: más de 90 medidas RRHH para una mediana empresa",
    fecha: "2024-07-18",
    hora: "04:00",
    ubicacion: "ScaleUp",
    imagen: Imagen2,
    precio: 50,
    entradasDisponibles: 10,
    aprobado: true,
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
  {
    id: 3,
    titulo: "Open Day Master",
    fecha: "2024-07-17",
    hora: "23:59",
    ubicacion: "Inno/Online",
    imagen: Imagen3,
    precio: "gratuito",
    entradasDisponibles: 100,
    aprobado: true,
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
  {
    id: 4,
    titulo:
      "Webinar online: ¿Cómo aplicar la agilidad para crear más valor en tu...",
    fecha: "2024-07-11",
    hora: "10:00",
    ubicacion: "Online",
    imagen: Imagen4,
    precio: 100,
    entradasDisponibles: 0,
    aprobado: true,
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
  {
    id: 5,
    titulo: "Cómo convertir los datos en información útil",
    fecha: "2024-07-12",
    hora: "10:30",
    ubicacion: "Online",
    imagen: Imagen5,
    precio: 200,
    entradasDisponibles: 5,
    aprobado: true,
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
  {
    id: 6,
    titulo:
      "Desayuno sostenibilidad: 'cuando el propósito tiene más bla-bla-bla que...'",
    fecha: "2024-07-13",
    hora: "08:00",
    ubicacion: "Inno",
    imagen: Imagen1,
    precio: "gratuito",
    entradasDisponibles: 100,
    aprobado: true,
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
  {
    id: 7,
    titulo: "Hackaton Desafía tus límites con Nike",
    fecha: "2024-07-17",
    hora: "23:55",
    ubicacion: "Salón de universitarios - 370",
    imagen: Imagen6,
    precio: 200,
    entradasDisponibles: 1,
    aprobado: false,
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
  {
    id: 8,
    titulo: "Desayuno RRHH: más de 90 medidas RRHH para una mediana empresa",
    fecha: "2024-07-17",
    hora: "23:30",
    ubicacion: "ScaleUp",
    imagen: Imagen2,
    precio: 50,
    entradasDisponibles: 10,
    aprobado: false,
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
  {
    id: 9,
    titulo: "Open Day Master",
    fecha: "2024-07-17",
    hora: "23:30",
    ubicacion: "Inno/Online",
    imagen: Imagen3,
  aprobado: false,
    entradasDisponibles: 100,
    estado: "pendiente",
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
  {
    id: 10,
    titulo:
      "Webinar online: ¿Cómo aplicar la agilidad para crear más valor en tu...",
    fecha: "2024-07-11",
    hora: "10:00",
    ubicacion: "Online",
    imagen: Imagen4,
    precio: 100,
    entradasDisponibles: 0,
    aprobado: false,
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
  {
    id: 11,
    titulo: "Cómo convertir los datos en información útil",
    fecha: "2024-07-12",
    hora: "10:30",
    ubicacion: "Online",
    imagen: Imagen5,
    precio: 200,
    entradasDisponibles: 5,
    aprobado: false,
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
  {
    id: 12,
    titulo:
      "Desayuno sostenibilidad: 'cuando el propósito tiene más bla-bla-bla que...'",
    fecha: "2024-07-13",
    hora: "08:00",
    ubicacion: "Inno",
    imagen: Imagen1,
    precio: "gratuito",
    entradasDisponibles: 100,
    aprobado: false,
    informacion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem quod veniam aut explicabo a aliquid! Officiis at pariatur non debitis optio numquam distinctio ex doloribus ratione veniam nulla quod placeat, dignissimos nam ut quae enim minima vel. Obcaecati placeat distinctio tenetur assumenda a, numquam non iste reiciendis voluptas ipsam?",
  },
];

export default eventos;
