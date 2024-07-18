import "swiper/swiper-bundle.css";
import { EventCard } from "./EventCard";
import { EventUpComing } from "./EventUpComing";
import { useEffect, useState } from "react";
import axios from "axios";

export const EventList = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/events/",
      // url : "https://i002-flowento-back-1.onrender.com/events/",
      withCredentials : true
    })
      .then((response) => {
        const {data} = response;
        const {payload} = data

        console.log(data);

        //hagarrar la data
        //filtrar

        setEvents(payload);

      })
      .catch(function (error) {

        console.log(error);
        
        const { response } = error;
        const { data } = response;

        alert(data.payload);
      })
  }, [])
  

  return (
    <div className="container px-5 py-5 mx-auto md:px-10 md:py-10 font-lato">
      <EventCard />
      <div className="mt-5 md:mt-10">
        <EventUpComing />
      </div>
    </div>
  );
};
