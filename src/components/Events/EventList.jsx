import "swiper/swiper-bundle.css";
import EventCard from "./EventCard";
import EventUpComing from "./EventUpComing";

export const EventList = () => {
  return (
    <div className="container px-5 py-5 mx-auto md:px-10 md:py-10 font-lato">
      <EventCard />
      <div className="mt-5 md:mt-10">
        <EventUpComing />
      </div>
    </div>
  );
};
