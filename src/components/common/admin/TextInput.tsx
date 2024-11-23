import React from "react";

type TextInputType = {
  text: string;
  label: string;
  placeholder?: string;
};
export default function TextInput({
  text,
  label,
  placeholder = "Enter field",
}: TextInputType) {
  return (
    <div className="">
      <label htmlFor={label}>{label}</label>
      <input type="text" name={label} id={label} placeholder={placeholder} />
    </div>
  );
}
