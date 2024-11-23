import React from "react";

export default function ButtonLoader() {
  return (
    <button
      disabled={true}
      className=" mt-8 bg-green-500 rounded-md h-[60px] text-xl font-medium w-full flex items-center justify-center"
    >
      <span className="btnloader"></span>
    </button>
  );
}
