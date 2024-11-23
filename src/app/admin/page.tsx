import BreadCrumb from "@/components/common/admin/BreadCrumb";
import StatisticsCard from "@/components/common/admin/StatisticCard";
import ReportTable from "@/components/pages/admin/reports";
import { ClipboardList, DollarSign, User } from "lucide-react";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Govora Platform",
  description: "Generated by create next app",
};

export default function page() {
  return (
    <div>
      <BreadCrumb title="Dashboard" />

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-7">
        <StatisticsCard
          title="Total Subscribers"
          value={2500}
          icon={<User className="h-6 w-6 text-blue-600" />}
          colorClass="bg-blue-500"
        />
        <StatisticsCard
          title="Total Staff"
          value={500}
          icon={<User className="h-6 w-6 text-green-600" />}
          colorClass="bg-green-500"
        />
        <StatisticsCard
          title="Total Reports"
          value={120}
          icon={<ClipboardList className="h-6 w-6 text-yellow-600" />}
          colorClass="bg-yellow-500"
        />
        <StatisticsCard
          title="Total Revenue"
          value={"$50,000"}
          icon={<DollarSign className="h-6 w-6 text-red-600" />}
          colorClass="bg-red-500"
        />
      </div>
      <ReportTable />
    </div>
  );
}
