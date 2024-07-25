import QRCode from 'react-qr-code';

const QRDisplay = ({ qrValue }) => {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <QRCode value={qrValue} className="w-[274px] h-[274px]" />
      <p className="mt-4 text-gray-500">Actualización automática cada 30 segundos</p>
    </div>
  );
};

export default QRDisplay;
