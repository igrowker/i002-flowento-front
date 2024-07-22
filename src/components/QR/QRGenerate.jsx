import { Link } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';

const GenerateQRButton = () => {
  return (
    <div className="flex items-center ml-4 mt-4 mr-6 md:ml-8 md:mt-6 md:mr-12">
      <Link to="/qr-display-view">
        <button className="w-[148px] px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold md:w-[180px] md:px-6 md:py-3 md:text-lg">
          Generar QR
        </button>
      </Link>
      <FaShareAlt className="ml-auto text-orange-500 text-lg md:text-xl" />
    </div>
  );
};

export default GenerateQRButton;
