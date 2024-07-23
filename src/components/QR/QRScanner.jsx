import React from 'react';
import ArrowLeft from './ArrowLeft'
import MainComponent from './MainComponent'
import GenerateQRButton from './QRGenerate';
import QREventDetails from './QREventDetails';
import EventDescriptionCard from './EventDescriptionCard';

function QRScanner() {
  return (
    <>
      <MainComponent />
      <QREventDetails />
      <GenerateQRButton />
      <EventDescriptionCard />
      <ArrowLeft to="/event-detail" />
    </>
  )
}

export default QRScanner;