import BreadCrumb from "@/components/common/admin/BreadCrumb";
import Notifications from "@/components/pages/admin/notificationList";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications - Govora Platform",
  description: "Generated by create next app",
};

export default function page() {
  return (
    <div className="">
      <BreadCrumb title="Notifications" />
      <Notifications />
    </div>
  );
}