import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const ButtonBack = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
    >
      <BsArrowLeft className="text-2xl md:text-4xl text-orangeprimary hover:text-orange-600" />
    </button>
  );
};

export default ButtonBack;
