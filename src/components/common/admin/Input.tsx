// components/Input.tsx

import React, { useState } from "react";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(value.length > 0); // Check if there's value to keep label in place

  console.log(isFocused);
  return (
    <div className="relative w-full mt-5">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder=" "
        className={`peer block w-full px-4 py-4 border-b border-b-gray-300 rounded-md outline-none  transition-all ${className} text-lg font-medium`}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500 text-lg font-medium`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
