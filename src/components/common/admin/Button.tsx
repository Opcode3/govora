import React from "react";

type ButtonType = {
  value: string;
  disable?: boolean;
};
export default function Button({ value }: ButtonType) {
  return (
    <button className=" mt-8 text-white bg-green-500 rounded-md h-[60px] text-xl font-medium w-full flex items-center justify-center">
      {value}
    </button>
  );
}
