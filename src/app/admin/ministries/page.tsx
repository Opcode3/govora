import BreadCrumb from "@/components/common/admin/BreadCrumb";
import Ministries from "@/components/pages/admin/ministryList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ministries - Govora Platform",
  description: "Generated by create next app",
};
export default function page() {
  return (
    <div className="">
      <BreadCrumb title="Ministries" />
      <Ministries />
    </div>
  );
}
