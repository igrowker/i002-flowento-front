const GenerateQRButton = ({ onGenerateQR }) => {
  return (
    <div className="flex items-center ml-4 mt-4 mr-6 md:ml-8 md:mt-6 md:mr-12">
      <button
        onClick={onGenerateQR}
        className="flex w-50 rounded-3xl justify-center bg-orangeprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white"
        style={{ boxShadow: "0px 4px 10px 0px #00000040" }} 
      >
        Generar QR
      </button>
    </div>
  );
};

export default GenerateQRButton;
