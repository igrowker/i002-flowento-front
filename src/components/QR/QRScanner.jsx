import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import GenerateQRButton from "../QR/GenerateQRButton";
import QRCode from "react-qr-code";
import { BsCalendarCheck } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import ButtonBack from "../Events/ButtonBack";

const QRScanner = () => {
  const [event, setEvent] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showGenerateQR, setShowGenerateQR] = useState(false);
  const [hasGeneratedQR, setHasGeneratedQR] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/events/${id}`,
          { withCredentials: true }
        );
        setEvent(response.data.payload);
      } catch (error) {
        console.error("Error al cargar los detalles del evento:", error);
      }
    };

    fetchEventDetails();
  }, [id]);

  useEffect(() => {
    const registered = localStorage.getItem(`registered-${id}`);
    const qrGenerated = localStorage.getItem(`qr-generated-${id}`);

    setIsRegistered(registered === 'true');
    setShowGenerateQR(registered === 'true' && qrGenerated !== 'true');
    setHasGeneratedQR(qrGenerated === 'true');
  }, [id]);

  useEffect(() => {
    if (hasGeneratedQR) {
      const interval = setInterval(() => {
        setQrValue(`https://example.com/event/${id}?timestamp=${new Date().getTime()}`);
      }, 30000); 

      return () => clearInterval(interval);
    }
  }, [hasGeneratedQR, id]);

  const handleRegister = async () => {
    try {
      setShowGenerateQR(true);
      localStorage.setItem(`registered-${id}`, 'true');
      setIsRegistered(true);
    } catch (error) {
      console.error("Error al registrarse:", error);
    }
  };

  const handleGenerateQR = async () => {
    try {
      setShowGenerateQR(false);
      setHasGeneratedQR(true);
      localStorage.setItem(`qr-generated-${id}`, 'true');
      setQrValue(`https://example.com/event/${id}`);
    } catch (error) {
      console.error("Error al generar el QR:", error);
    }
  };

  const handleViewQR = () => {
    if (!hasGeneratedQR) {
      setShowGenerateQR(true);
    } else {
      setShowGenerateQR(false);
    }
  };

  if (!event) return <div>Cargando...</div>;

  return (
    <section className="overflow-hidden text-gray-600 body-font font-lato">
      <div className="container px-2 py-4 mx-auto md:py-12 md:px-5">
        <div className="flex flex-wrap mx-auto lg:w-4/5">
          <img
            className="object-cover object-center w-full h-full shadow-xl rounded-2xl"
            src={event.image}
            alt={event.name}
          />
        </div>
      </div>

      <div className="container p-4 mx-auto md:p-12 md:px-16">
        <h2 className="flex justify-between text-xl font-semibold text-orangeprimary bg-clip-text text-fill-transparent md:text-2xl lg:text-3xl">
          {event.name}
        </h2>
        <div className="my-4 md:my-6 lg:my-8">
          <p className="text-base leading-relaxed text-gray-700 md:text-lg lg:text-xl">
            {event.description}
          </p>
        </div>

        <div className="flex justify-between pb-3 text-gray-500 font-lato">
          <div className="flex items-center mb-2">
            <BsCalendarCheck className="text-lg text-orangeprimary md:text-xl lg:text-2xl" />
            <span className="ml-2 text-gray300 md:text-lg lg:text-xl">
              {event.start_date}
            </span>
          </div>
          <div className="flex items-center">
            <FaRegClock className="text-lg text-orangeprimary md:text-xl lg:text-2xl" />
            <span className="ml-2 text-gray300 md:text-lg lg:text-xl">
              {event.hour}
            </span>
          </div>
        </div>
        <div className="flex justify-between pb-3 text-gray-500 font-lato">
          <div className="flex items-center space-x-4">
            <GoLocation className="text-lg text-orangeprimary md:text-xl lg:text-2xl" />
            <span className="text-gray300 md:text-lg lg:text-xl">
              {event.location}
            </span>
          </div>
          <div className="flex items-center">
            <BiDollar className="text-lg text-orangeprimary md:text-xl lg:text-2xl" />
            <span className="ml-2 text-gray300 md:text-lg lg:text-xl">
              {event.price > 0 ? `$${event.price}` : "Gratuito"}
            </span>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          {!isRegistered ? (
            <div className="flex flex-col items-center w-full">
              <button onClick={handleRegister} className="btn-register">
                Inscribirse
              </button>
              <ButtonBack className="ml-4" />
            </div>
          ) : showGenerateQR ? (
            <div className="flex justify-between items-center w-full">
              <GenerateQRButton onGenerateQR={handleGenerateQR} />
              <ButtonBack />
            </div>
          ) : (
            <div className="flex flex-col items-center w-full">
              <QRCode value={qrValue} />
              <ButtonBack className="mt-4 self-start" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QRScanner;
