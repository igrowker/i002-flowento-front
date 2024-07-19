import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PropTypes from "prop-types";
import { CheckIcon } from "@heroicons/react/24/outline";

const Captcha = ({ onVerify }) => {
  const [isVerified, setIsVerified] = useState(false);
  const recaptchaRef = useRef(null);

  const handleVerify = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.execute();
    }
  };

  const handleVerification = (value) => {
    if (value) {
      setIsVerified(true);
      onVerify(value);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        className={`flex items-center justify-center w-4 h-4 border-2 rounded-sm cursor-pointer border-orangeprimary ${
          isVerified ? "bg-orangeprimary" : ""
        }`}
        onClick={handleVerify}
      >
        {isVerified && (
          <CheckIcon className="w-2 h-2 text-white" aria-hidden="true" />
        )}
      </div>
      <span className="text-sm font-medium text-black">No soy un robot</span>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="KEY" // Reemplaza con la KEY de CAPTCHA
        onChange={handleVerification}
        size="invisible"
      />
    </div>
  );
};

Captcha.propTypes = {
  onVerify: PropTypes.func.isRequired,
};

export default Captcha;
