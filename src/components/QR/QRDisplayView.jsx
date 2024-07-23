import React, { useEffect, useState } from 'react';
import ArrowLeft from './ArrowLeft';
import QREventDetails from './QREventDetails';
import QRDisplay from './QRDisplay';
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
      <ArrowLeft to="/qr" />
    </div>
  );
};

export default QRDisplayView;
