import { PowerOff } from "lucide-react";
import Link from "next/link";
import React from "react";

type BreadCrumbType = {
  title: string;
};
export default function BreadCrumb({ title }: BreadCrumbType) {
  return (
    <div className="py-1 flex justify-between items-center mb-5">
      <h1 className=" text-5xl font-bold ">{title}</h1>
      <div className="">
        <Link
          href={"/logout"}
          className="flex items-center gap-2 text-xl bg-red-600 text-white py-3 px-4 rounded-md font-medium"
        >
          <PowerOff className=" stroke-white" />
          Log Out
        </Link>
      </div>
    </div>
  );
}
