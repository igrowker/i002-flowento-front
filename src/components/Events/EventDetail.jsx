import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RegistrationForm from "../QR/RegistrationForm";
import { BsCalendarCheck } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import ButtonBack from "./ButtonBack";
import ButtonShare from "./ButtonShare";
import Preloader from "../../components/Preloader";

const EventDetail = () => {
  const [showForm, setShowForm] = useState(false);
  const [event, setEvent] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

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

    if (localStorage.getItem(`registered-${id}`)) {
      setIsRegistered(true);
    }
  }, [id]);

  const handleButtonClick = () => {
    if (isRegistered) {
      navigate(`/qrscanner/${id}`);
    } else {
      setShowForm(true);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSuccessfulRegistration = () => {
    setIsRegistered(true);
    setShowForm(false);
    localStorage.setItem(`registered-${id}`, 'true');
    navigate(`/qrscanner/${id}`);
  };

  if (!event) return <Preloader />;

  return (
    <>
      <section className="overflow-hidden text-gray-600 body-font font-lato">
        <div className="container px-2 py-4 mx-auto md:py-12 md:px-5">
          <div className="flex flex-wrap mx-auto lg:w-6/5">
            <img
              className="object-cover object-center w-full h-full border-2 shadow-2xl rounded-2xl border-orangeprimary"
              src={event.image}
              alt={event.name}
            />
          </div>
        </div>

        <div className="container p-4 mx-auto md:p-12 md:px-16">
          <h2 className="flex justify-between text-xl font-semibold text-orangeprimary bg-clip-text text-fill-transparent md:text-2xl lg:text-3xl">
            {event.name}
            <ButtonShare />
          </h2>

          <div className="my-4 md:my-6 lg:my-8">
            <p className="text-base leading-relaxed text-gray-700 md:text-lg lg:text-xl">
              {event.description}
            </p>
          </div>

          <div className="flex justify-between pb-3 font-bold text-gray-800 font-lato">
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
          <div className="flex justify-between pb-3 font-bold text-gray-800 font-lato">
            <div className="flex items-center">
              <GoLocation className="text-lg text-orangeprimary md:text-xl lg:text-2xl" />
              <span className="ml-2 text-gray300 md:text-lg lg:text-xl">
                {event.location}
              </span>
            </div>
            <div className="flex items-center">
              <BiDollar className="text-lg text-orangeprimary md:text-xl lg:text-2xl" />
              <span className="ml-2 text-gray300 md:text-lg lg:text-xl">
                {event.price > 0 ? `${event.price}` : "Gratuito"}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <button 
              onClick={handleButtonClick}
              className="flex w-50 rounded-3xl justify-center bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white"
              style={{ boxShadow: "0px 4px 10px 0px #00000040"}}
            >
              {isRegistered ? "Inscripto" : "Inscribirse"}
            </button>
            <ButtonBack />
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <RegistrationForm
            onClose={handleCloseForm}
            eventId={id}
            onSuccessfulRegistration={handleSuccessfulRegistration}
          />
        </div>
      )}
    </>
  );
};

export default EventDetail;
