import React from 'react';
import { FaRegCalendarCheck, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';

function QREventDetails() {
  return (
    <div className="p-4 bg-white shadow rounded-md top-72 md:p-8 lg:p-12">
      <h2 className="text-xl font-semibold mb-4 text-orangeprimary bg-clip-text text-fill-transparent md:text-2xl lg:text-3xl">
        Desayunos inquietos: Canales para mejorar el desarrollo web
      </h2>

      <p className="text-gray500 mb-8 md:text-lg lg:text-xl"></p>

      <div className="flex items-center mb-2">
        <FaRegCalendarCheck className="text-orangeprimary text-lg md:text-xl lg:text-2xl" />
        <span className="text-gray300 ml-2 md:text-lg lg:text-xl">14/07/2024</span>
        <div className="ml-auto flex items-center">
          <FaRegClock className="text-orangeprimary text-lg md:text-xl lg:text-2xl" />
          <span className="text-gray300 ml-2 md:text-lg lg:text-xl">09:00 h</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <FaMapMarkerAlt className="text-orangeprimary text-lg md:text-xl lg:text-2xl" />
        <span className="text-gray300 md:text-lg lg:text-xl">Sala de innovación - 200</span>
      </div>
    </div>
  );
}

export default QREventDetails;
