import BreadCrumb from "@/components/common/admin/BreadCrumb";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports - Govora Platform",
  description: "Generated by create next app",
};

export default function page() {
  return (
    <div className="">
      <BreadCrumb title="Reports" />
    </div>
  );
}
