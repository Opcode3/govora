import Link from "next/link";
import React from "react";
import SpotlightNewsSlider from "./spotlightSlider";

export default function Hero() {
  return (
    <div className="grid grid-cols-[51%_49%] mb-5 max-w-[1200px] mx-auto">
      <div className="pr-10 py-10">
        <h2 className=" text-3xl font-medium text-gray-700">
          Recent Spotlight
        </h2>
        <p className="text-lg text-gray-700">
          Get the latest updates on key issues shaping Nigeria’s governance and
          economy.
        </p>
        <div className=" relative">
          <SpotlightNewsSlider />
        </div>
      </div>
      <div className=" bg-white rounded px-[4%] mt-5 mb-10 pt-4">
        <h1 className=" text-4xl text-gray-700 font-bold">At Govora</h1>
        <p className=" text-xl py-3 text-gray-700 text-justify">
          We connect citizens with their government through national reports,
          policy insights, leaders archives, project tracking, and citizen
          engagement for transparency and accountability.
        </p>

        <p className=" text-xl py-3 text-gray-700 text-justify">
          <strong>Our Vision</strong> is to create an informed, engaged, and
          empowered Nigerian society where transparency and collaboration drive
          effective governance.
        </p>
        <p className=" text-xl py-3 text-gray-700 text-justify">
          <strong>Our Mission</strong> is to streamline access to critical
          information, foster citizen engagement, and promote accountability in
          Nigerian governance through innovative digital solutions.
        </p>

        <div className="flex items-end gap-3 justify-end mt-10">
          <Link href={""} className=" underline text-lg text-gray-700">
            Learn more about how Govora works
          </Link>

          <Link
            href={""}
            className=" bg-green-500 text-white py-2 px-4 rounded-sm text-lg"
          >
            Join Our NewsLetter
          </Link>
        </div>
      </div>
    </div>
  );
}
