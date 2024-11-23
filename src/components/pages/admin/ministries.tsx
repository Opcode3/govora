"use client";
import { Edit, Trash } from "lucide-react";
import React from "react";

interface Ministry {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

interface MinistryTableProps {
  ministries: Ministry[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const MinistryTable: React.FC<MinistryTableProps> = ({
  ministries,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
              Name
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
              Description
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
              Created At
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {ministries.map((ministry) => (
            <tr key={ministry.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700">
                {ministry.name}
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                {ministry.description}
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                {ministry.createdAt}
              </td>
              <td className="py-3 px-4 text-sm">
                <button
                    onClick={() => onEdit(ministry.id)}
                  className="text-blue-600 hover:text-blue-800 mr-3"
                >
                  <Edit className="inline-block" />
                </button>
                <button
                    onClick={() => onDelete(ministry.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash className="inline-block" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MinistryTable;
