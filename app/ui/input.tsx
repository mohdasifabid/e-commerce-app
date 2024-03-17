"use client";

import { useState } from "react";
import { InputPropsType } from "../lib/definitions";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export const Input = (props: InputPropsType) => {
  const { placeholder, label, type, setter } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () =>
    setShowPassword((prevState) => !prevState);
    
  return (
    <div className="min-w-300 h-74">
      <p className="">{label}</p>
      <div className="relative">
        <input
          onChange={(e) => setter(e.target.value)}
          type={showPassword ? "text" : type} 
          placeholder={placeholder}
          className="w-456 h-48 p-2  focus:outline-none border-2 border-gray-400 rounded-md"
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute top-4 right-4"
            onClick={handlePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
};
