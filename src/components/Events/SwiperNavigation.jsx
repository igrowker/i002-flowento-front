import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SwiperNavigation = () => {
  return (
    <>
      <div className="swiper-button-prev">
        <BsChevronLeft />
      </div>
      <div className="swiper-button-next">
        <BsChevronRight />
      </div>
    </>
  );
};

export default SwiperNavigation;
