import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QREventDetails from './QREventDetails';
import QRDisplay from './QRDisplay';
import { FaArrowLeft } from 'react-icons/fa';
import MainComponent from './MainComponent';

const QRDisplayView = () => {
  const [qrValue, setQrValue] = useState('');

  const generateQRValue = () => {
    const newValue = new Date().toISOString();
    setQrValue(newValue);
  };

  useEffect(() => {
    generateQRValue();
    const intervalId = setInterval(generateQRValue, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col">
      <MainComponent />
      <QREventDetails />
      <QRDisplay qrValue={qrValue} />
      <Link to="/qr" className="mt-4 mb-4 self-start ml-4">
        <FaArrowLeft className="text-lg text-orange-500" />
      </Link>
    </div>
  );
};

export default QRDisplayView;
