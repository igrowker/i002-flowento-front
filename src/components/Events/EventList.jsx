import "swiper/swiper-bundle.css";
import { EvenUpComming } from "./EventUpcoming";
import { EventCard } from "./EventCard";

export const EventList = () => {
  return (
    <div className="container px-5 py-5 md:px-10 md:py-10 mx-auto font-lato">
      <EventCard />
      <div className="mt-5 md:mt-10">
        <EvenUpComming />
      </div>
    </div>
  );
};
