"use client";
import React from "react";

interface Report {
  id: number;
  title: string;
  author: string;
  date: string;
  status: "Published" | "Draft";
}

const reports: Report[] = [
  {
    id: 1,
    title: "How to Build a React App",
    author: "John Doe",
    date: "2024-11-21",
    status: "Published",
  },
  {
    id: 2,
    title: "Understanding Tailwind CSS",
    author: "Jane Smith",
    date: "2024-11-19",
    status: "Draft",
  },
  {
    id: 3,
    title: "Next.js: The Best Framework for SEO",
    author: "Alex Brown",
    date: "2024-11-17",
    status: "Published",
  },
  {
    id: 4,
    title: "Typescript vs JavaScript",
    author: "Emily White",
    date: "2024-11-15",
    status: "Draft",
  },
];

const ReportTable: React.FC = () => {
  const handleEdit = (id: number) => {
    console.log("Editing report with id:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Deleting report with id:", id);
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Recent Reports
      </h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
              Title
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
              Author
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
              Date
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
              Status
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700">
                {report.title}
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                {report.author}
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">{report.date}</td>
              <td className="py-3 px-4 text-sm">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    report.status === "Published"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {report.status}
                </span>
              </td>
              <td className="py-3 px-4 text-sm">
                <button
                  onClick={() => handleEdit(report.id)}
                  className="text-blue-600 hover:text-blue-800 mr-3"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(report.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
