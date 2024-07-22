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
      // url: "http://localhost:8080/events/",
      url : `${process.env.REACT_APP_API_URL}/auth/events-list/`,
      withCredentials : true
    })
      .then((response) => {
        const {data} = response;
        const {payload} = data
        console.log(data);
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
