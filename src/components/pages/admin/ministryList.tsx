// pages/ministries.tsx
"use client";
import React, { useState } from "react";
import MinistryTable from "./ministries";
import { PlusCircle } from "lucide-react";

interface Ministry {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

const Ministries: React.FC = () => {
  // Dummy Data for Ministries
  const [ministries, setMinistries] = useState<Ministry[]>([
    {
      id: 1,
      name: "Ministry of Education",
      description:
        "Responsible for setting educational standards and policies.",
      createdAt: "2024-01-01",
    },
    {
      id: 2,
      name: "Ministry of Health",
      description:
        "Focuses on healthcare policy, medical research, and public health.",
      createdAt: "2024-03-15",
    },
    {
      id: 3,
      name: "Ministry of Finance",
      description:
        "Responsible for national economic policy, government expenditure, and financial regulations.",
      createdAt: "2024-05-10",
    },
    {
      id: 4,
      name: "Ministry of Foreign Affairs",
      description: "Handles diplomatic relations and international policy.",
      createdAt: "2024-02-20",
    },
    {
      id: 5,
      name: "Ministry of Justice",
      description:
        "Oversees the legal system and ensures the proper administration of justice.",
      createdAt: "2024-06-01",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editMinistry, setEditMinistry] = useState<Ministry | null>(null);

  console.log(editMinistry);

  const [searchQuery, setSearchQuery] = useState(""); // For search input
  const [filterDate, setFilterDate] = useState(""); // For filter dropdown (created date)

  // Filter and search logic
  const filteredMinistries = ministries.filter((ministry) => {
    // Filter by search query (name or description)
    const matchesSearchQuery =
      ministry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ministry.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by date range if a filter is applied
    const matchesDateFilter = filterDate
      ? ministry.createdAt.startsWith(filterDate)
      : true;

    return matchesSearchQuery && matchesDateFilter;
  });

  console.log(isEditing);
  // Handle Edit Ministry
  const handleEdit = (id: number) => {
    const ministryToEdit = ministries.find((ministry) => ministry.id === id);
    if (ministryToEdit) {
      setEditMinistry(ministryToEdit);
      setIsEditing(true);
    }
  };

  // Handle Delete Ministry
  const handleDelete = (id: number) => {
    setMinistries(ministries.filter((ministry) => ministry.id !== id));
  };

  // Handle Add New Ministry
  // const handleAddMinistry = (name: string, description: string) => {
  //   const newMinistry = {
  //     id: ministries.length + 1, // Increment the id for dummy data
  //     name,
  //     description,
  //     createdAt: new Date().toLocaleDateString(),
  //   };
  //   setMinistries([...ministries, newMinistry]);
  // };

  // Handle Update Existing Ministry
  // const handleUpdateMinistry = (name: string, description: string) => {
  //   if (editMinistry) {
  //     const updatedMinistries = ministries.map((ministry) =>
  //       ministry.id === editMinistry.id
  //         ? { ...ministry, name, description }
  //         : ministry
  //     );
  //     setMinistries(updatedMinistries);
  //     setIsEditing(false);
  //     setEditMinistry(null);
  //   }
  // };

  return (
    <div className="  mt-16">
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Ministries"
            className="p-3 border border-gray-300 rounded-lg w-1/3"
          />

          <select
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Filter by Creation Date</option>
            <option value="2024-01">January 2024</option>
            <option value="2024-02">February 2024</option>
            <option value="2024-03">March 2024</option>
            <option value="2024-05">May 2024</option>
            <option value="2024-06">June 2024</option>
          </select>
        </div>

        <button
          onClick={() => setIsEditing(true)}
          className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center"
        >
          <PlusCircle className="mr-2" />
          Add Ministry
        </button>
      </div>

      {/* Search and Filter Section */}

      {/* Ministry Table */}
      <MinistryTable
        ministries={filteredMinistries}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Ministries;
