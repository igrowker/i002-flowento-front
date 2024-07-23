import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function ArrowLeft({ to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="w-full max-w-[326px] sm:max-w-[60%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[90%] flex justify-start mb-5 ml-5">
      <FaArrowLeft
        onClick={handleClick}
        className="text-lg text-orange-500 md:text-xl cursor-pointer"
      />
    </div>
  );
}

export default ArrowLeft;
