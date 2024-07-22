import React from 'react';
import GenerateQRButton from './QRGenerate';
import QREventDetails from './QREventDetails';
import EventDescriptionCard from './EventDescriptionCard';
import MainComponent from './MainComponent';

function QRScanner() {
  return (
    <>
      <MainComponent />
      <QREventDetails />
      <GenerateQRButton />
      <EventDescriptionCard />
    </>
  )
}

export default QRScanner;