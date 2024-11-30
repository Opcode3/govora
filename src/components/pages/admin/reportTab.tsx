"use client";
import { getReports } from "@/services/reportService";
import { PostResponseInterface } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, FilePenLine, PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ReportTabs = () => {
  const [activeTab, setActiveTab] = useState<
    "blog" | "analytics" | "event" | "political"
  >("blog");

  const { isLoading, data } = useQuery({
    queryKey: ["reports"],
    queryFn: getReports,
  });

  const filterSearch = () => {
    if (data && data.data && Array.isArray(data.data)) {
      return data.data.filter(
        (item: PostResponseInterface) =>
          item.report_type.toLowerCase() == activeTab
      );
    }
    return [];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end items-center mb-8">
        <Link
          href={"./reports/new"}
          className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center"
        >
          <PlusCircleIcon className="mr-2" />
          Add Report
        </Link>
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-6 mb-6">
        <button
          className={`py-2 px-6 text-sm font-semibold ${
            activeTab === "blog"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("blog")}
        >
          Content Reports
        </button>
        <button
          className={`py-2 px-6 text-sm font-semibold ${
            activeTab === "analytics"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics Reports
        </button>
        <button
          className={`py-2 px-6 text-sm font-semibold ${
            activeTab === "event"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("event")}
        >
          Event Reports
        </button>
        <button
          className={`py-2 px-6 text-sm font-semibold ${
            activeTab === "political"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("political")}
        >
          Political Reports
        </button>
      </div>

      {/* Table */}
      <div>
        <table className="min-w-full bg-white border-collapse border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-4 px-4 text-left">Title</th>
              <th className="py-4 px-4 text-left">Reporter</th>
              <th className="py-4 px-4 text-left">Create Date</th>
              <th className="py-4 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
            data.data &&
            Array.isArray(data.data) &&
            data.data.length > 0 ? (
              filterSearch().map((item: PostResponseInterface, i) => (
                <tr
                  key={i}
                  className={` border-b ${
                    i % 2 !== 0 ? "bg-gray-100" : "bg-gray-50"
                  }`}
                >
                  <td className="py-4 pl-6">{item.report_title}</td>
                  <td>{item.report_reporter}</td>
                  <td>{item.created_at}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <Link href={""} className="px-2">
                        <ExternalLink className=" stroke-1 size-5" />
                      </Link>
                      <Link href={""} className="px-2">
                        <FilePenLine className=" stroke-1 size-5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="">
                <td colSpan={3}>No Report record was found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTabs;
