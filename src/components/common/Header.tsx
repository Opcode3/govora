import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const navList = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Leader",
      url: "/leader",
    },
    {
      name: "Ministries",
      url: "",
    },
    {
      name: "Projects",
      url: "",
    },
    {
      name: "Blog",
      url: "",
    },
    {
      name: "Opportunities",
      url: "",
    },
  ];

  const additionList = [
    {
      name: "Join",
      url: "/",
    },
    {
      name: "SignIn",
      url: "/leader",
    },
    {
      name: "Report Live",
      url: "",
    },
  ];
  return (
    <header className=" w-full border-b bg-white py-4">
      <div className=" w-full max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className=" relative">
            <Image
              src={"/images/logo.png"}
              alt="Govora"
              width={300}
              height={100}
              className=" h-10 w-fit"
            />
          </div>
          <ul className=" flex items-center gap-1">
            {navList.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className=" text-base font-normal px-3 py-3 block text-gray-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
        <ul className=" flex items-center">
          {additionList.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className={`text-base px-3 py-3 block  ${
                  index == 2
                    ? " bg-green-500 font-medium ml-3 text-white rounded-sm px-5 "
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </header>
  );
}
