/* eslint-disable react/prop-types */
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

export const InputPassword = () => {
  const password = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="relative block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm pr-9 rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm">
      <input
        ref={password}
        id={name.toLowerCase()}
        name={name.toLowerCase()}
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
        required
      />
      <button
        type="button"
        onClick={handleTogglePassword}
        className="absolute inset-y-0 right-0 items-center pr-3 flex-full"
      >
        {showPassword ? (
          <EyeSlashIcon
            className="w-5 h-5 text-gray-500 text-orangeprimary"
            aria-hidden="true"
          />
        ) : (
          <EyeIcon
            className="w-5 h-5 text-gray-500 text-orangeprimary"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
};

