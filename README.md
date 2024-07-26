# Frontend de Flowento

![image](https://github.com/user-attachments/assets/907f2260-fdad-44b0-bb89-156cc9e45ea7)

## Descripción General

Flowento es una aplicación digital mobile-first y SPA (Single Page Application) diseñada para la gestión y comunicación de eventos del Hub de Empresas (HdE) de Valencia. Está destinada a ser utilizada tanto por los organizadores de eventos (personal de HdE y partners) como por los asistentes (estudiantes, emprendedores, microempresas y público en general).

## Problema que se intenta resolver

HdE enfrenta una gran ineficiencia en la gestión de eventos debido a procesos manuales y la falta de digitalización. La propuesta y aprobación de eventos requieren plantillas manuales enviadas por correo, lo que es propenso a errores y retrasos. Las inscripciones y el control de asistencia también se manejan manualmente, complicando el seguimiento y análisis de la participación.

## Solución Propuesta

Crear una aplicación web responsiva diseñada para gestionar y comunicar eventos de HdE de manera integral. La aplicación centraliza la creación, inscripción, seguimiento y evaluación de eventos, reemplazando los procesos manuales con una plataforma intuitiva y automatizada.

## Características Generales

- **Login/Registro**: Autenticación y registro de usuarios.
- **Gestión de roles y permisos**: Diferentes niveles de acceso según el rol (administrador, organizador, asistente).
- **Formulario de creación de eventos**: Para que cualquier usuario autorizado pueda crear eventos.
- **Visualización**: Listado de todos los eventos creados, con detalles.
- **Búsqueda**: Por texto y categorías.
- **Automatización**: Confirmaciones, notificaciones y control de aforos automatizados.
- **Aprobación**: Moderación y aprobación de eventos propuestos por parte del departamento de marketing.
- **Compartir eventos**: Integración con redes sociales y correo electrónico.
- **Eventos online**: Enlaces y gestión de eventos en línea.
- **Panel de control**: Métricas y estadísticas sobre eventos.
- **Perfil de usuario**: Información personalizada y eventos registrados.
- **Gestión de espacios**: Reservas y disponibilidad de espacios.
- **Notificaciones**: Alertas y recordatorios para usuarios.
- **Mensajes internos**: Comunicación entre organizadores y participantes.
- **QR para asistencia**: Envío de código QR a los inscritos para control de asistencia y recolección de métricas.

## Arquitectura

### Frontend

- **Tecnologías**: React, Tailwind CSS, React Router, Axios, Zustand, Chart.js, Socket.io.
- **Componentes Clave**:
  - `App Component`: Punto de entrada principal.
  - `Auth Components`: Gestión de autenticación.
  - `Dashboard`: Acceso a secciones según rol.
  - `EventForm`: Creación y edición de eventos.
  - `EventList`: Listado y búsqueda de eventos.
  - `MetricsDashboard`: Visualización de métricas en tiempo real.

### Backend

- **Tecnologías**: Node.js, Express, JWT, Bcrypt, Sequelize, Socket.io, QRCode.
- **Base de Datos**: PostgreSQL.
- **Controladores Principales**:
  - `authController.js`: Gestión de autenticación y registro.
  - `eventController.js`: Gestión de eventos.
  - `userController.js`: Gestión de usuarios.
  - `spaceController.js`: Gestión de espacios.
  - `notificationController.js`: Gestión de notificaciones.
  - `messageController.js`: Gestión de mensajes internos.
  - `qrController.js`: Gestión de códigos QR.

## Funcionalidades

- **Autenticación y autorización**: Mediante JWT, asegurando accesos según roles.
- **Gestión de eventos**: Creación, actualización, eliminación y visualización.
- **Gestión de inscripciones y asistencia**: Inscripción a eventos y confirmación mediante QR.
- **Gestión de espacios**: Reservas y disponibilidad.
- **Mensajería interna**: Comunicación entre usuarios.
- **Notificaciones**: Alertas y recordatorios.
- **Feedback y métricas**: Recolección de feedback post-evento.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/igrowker/i002-flowento-front.git

2. Navega al directorio del frontend:

   ```bash
   cd i002-flowento-front

3. Instala las dependencias:

   ```bash
   npm install

4. Configuración

   Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno:

   ```bash
   REACT_APP_API_URL=[url del backend]

5. Ejecuta la aplicación:

   ```bash
   npm run dev

## Contribuciones

Agradecemos a los siguientes contribuidores por su valiosa participación en el proyecto:

- [Project Manager - Pamela Pilotti](https://github.com/Pamela198713)
- [Front End - Eduardo Chacon](https://github.com/eduardoe92)
- [Back End - Ulises Rodriguez ](https://github.com/Ulises-Rodriguez-809)
- [Front End - Christian Gil](https://github.com/Chgrar)
- [Front End - Dante Caballero](https://github.com/DanteNico1087)
- [QA - Fabricio Carpentieri](https://github.com/Carpentieri68)



