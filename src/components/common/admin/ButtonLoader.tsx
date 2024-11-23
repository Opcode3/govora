import React from "react";

type ButtonType = {
  value: string;
  disable?: boolean;
};
export default function ButtonLoader({ value }: ButtonType) {
  return (
    <button className=" mt-8 bg-green-500 rounded-md h-[60px] text-xl font-medium w-full flex items-center justify-center">
      <span className="btnloader"></span>
    </button>
  );
}