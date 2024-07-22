import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const EventDescriptionCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="w-full max-w-[326px] sm:max-w-[85%] md:max-w-[90%] lg:max-w-[95%] xl:max-w-[100%] p-4 bg-[#F3F3F3] rounded-tl-[8px] opacity-40 shadow-md mx-auto">
        <p className="text-2xl text-center md:text-3xl xl:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.
        </p>
      </div>
      <div className="w-full max-w-[326px] sm:max-w-[60%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[90%] flex justify-start mt-2">
        <Link to="/event-detail">
          <FaArrowLeft className="text-lg text-orange-500 md:text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default EventDescriptionCard;
