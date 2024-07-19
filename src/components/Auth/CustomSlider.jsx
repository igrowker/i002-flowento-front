import { useState } from "react";
import Slider from "react-slick";
import InputLogin from "./InputLogin";
import PasswordReset from "./PasswordReset";
import Login from "./Login";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
  };

  const handleNavigateToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative slider-container px-28">
      <div className="absolute top-0 flex mt-2 space-x-4 transform -translate-x-1/2 indicators left-1/2">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mt-2 cursor-pointer ${
              currentSlide === index ? "bg-orangeprimary" : "bg-gray-300"
            }`}
            onClick={() => handleNavigateToSlide(index)}
          ></div>
        ))}
      </div>
      <Slider {...settings} slickGoTo={currentSlide}>
        <div className="slide">
          <InputLogin onNavigateToLogin={() => handleNavigateToSlide(1)} />
        </div>
        <div className="slide">
          <Login onNavigateToReset={() => handleNavigateToSlide(2)} />
        </div>
        <div className="slide">
          <PasswordReset onNavigate={() => handleNavigateToSlide(1)} />
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
