import BreadCrumb from "@/components/common/admin/BreadCrumb";
import React from "react";
import { Metadata } from "next";
import ReportTabs from "@/components/pages/admin/reportTab";
import MakeReportPage from "@/components/pages/admin/makeReport";

export const metadata: Metadata = {
  title: "Reports - Govora Platform",
  description: "Generated by create next app",
};

export default function page() {
  return (
    <div className="">
      <BreadCrumb title="Make a Report" />
      <MakeReportPage />
    </div>
  );
}
