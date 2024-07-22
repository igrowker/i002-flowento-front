import React from 'react';
import { FaShareAlt } from 'react-icons/fa';

const RegisterButton = ({ onClick }) => {
  return (
    <div className="flex items-center ml-4 mt-4 mr-6 md:ml-8 md:mt-6 md:mr-12">
      <button
        onClick={onClick}
        className="flex w-50 rounded-3xl mt-4 justify-center bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white"
        style={{ boxShadow: "0px 4px 10px 0px #00000040" }}    
      >
        Inscribirse
      </button>
      <FaShareAlt className="ml-auto text-orange-500 text-lg md:text-xl" />
    </div>
  );
};

export default RegisterButton;
