"use client";
import { useState } from "react";

const ReportTabs = () => {
  const [activeTab, setActiveTab] = useState("contentReports");

  const renderTable = () => {
    switch (activeTab) {
      case "contentReports":
        return (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Blog Title</th>
                <th className="py-2 px-4 text-left">Author</th>
                <th className="py-2 px-4 text-left">Views</th>
                <th className="py-2 px-4 text-left">Published Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4">Understanding AI</td>
                <td className="py-2 px-4">John Doe</td>
                <td className="py-2 px-4">1500</td>
                <td className="py-2 px-4">2024-01-05</td>
              </tr>
              {/* More rows */}
            </tbody>
          </table>
        );
      case "analyticsReports":
        return (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Metric</th>
                <th className="py-2 px-4 text-left">Value</th>
                <th className="py-2 px-4 text-left">Trend</th>
                <th className="py-2 px-4 text-left">Period</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4">Page Views</td>
                <td className="py-2 px-4">12000</td>
                <td className="py-2 px-4">↑</td>
                <td className="py-2 px-4">Week</td>
              </tr>
              {/* More rows */}
            </tbody>
          </table>
        );
      case "eventReports":
        return (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Event Name</th>
                <th className="py-2 px-4 text-left">Location</th>
                <th className="py-2 px-4 text-left">Attendees</th>
                <th className="py-2 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4">AI Conference 2024</td>
                <td className="py-2 px-4">New York</td>
                <td className="py-2 px-4">500</td>
                <td className="py-2 px-4">2024-02-10</td>
              </tr>
              {/* More rows */}
            </tbody>
          </table>
        );
      case "politicalReports":
        return (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Politician Name</th>
                <th className="py-2 px-4 text-left">Party</th>
                <th className="py-2 px-4 text-left">Region</th>
                <th className="py-2 px-4 text-left">Approval Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4">Jane Smith</td>
                <td className="py-2 px-4">Democratic</td>
                <td className="py-2 px-4">California</td>
                <td className="py-2 px-4">85%</td>
              </tr>
              {/* More rows */}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tab Navigation */}
      <div className="flex space-x-6 mb-6">
        <button
          className={`py-2 px-6 text-sm font-semibold ${
            activeTab === "contentReports"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("contentReports")}
        >
          Content Reports
        </button>
        <button
          className={`py-2 px-6 text-sm font-semibold ${
            activeTab === "analyticsReports"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("analyticsReports")}
        >
          Analytics Reports
        </button>
        <button
          className={`py-2 px-6 text-sm font-semibold ${
            activeTab === "eventReports"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("eventReports")}
        >
          Event Reports
        </button>
        <button
          className={`py-2 px-6 text-sm font-semibold ${
            activeTab === "politicalReports"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("politicalReports")}
        >
          Political Reports
        </button>
      </div>

      {/* Table */}
      <div>{renderTable()}</div>
    </div>
  );
};

export default ReportTabs;
