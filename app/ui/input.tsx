"use client";

import { useState } from "react";
import { InputPropsType } from "../lib/definitions";

export const Input = (props: InputPropsType) => {
  const { placeholder, label, type, setter } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () =>
    setShowPassword((prevState) => !prevState);

  return (
    <div className="w-456 h-48">
      <p className="font-400">{label}</p>
      <div className="relative">
        <input
          onChange={(e) => setter(e.target.value)}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          className="w-456 h-58 p-2  focus:outline-none border-2 border-gray-400 rounded-md"
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute top-3 right-4 underline"
            onClick={handlePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
};
