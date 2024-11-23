"use client";
import { CheckCircle, CircleAlertIcon, CircleX, Trash } from "lucide-react";
import React, { useState } from "react";

interface Notification {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  status: "read" | "unread";
}

const Notifications: React.FC = () => {
  // Dummy data for notifications
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "System Update",
      description: "The system will undergo maintenance from 12 AM to 4 AM.",
      createdAt: "2024-11-20",
      status: "unread",
    },
    {
      id: 2,
      title: "New Ministry Added",
      description: "The Ministry of Environment has been added to the system.",
      createdAt: "2024-11-18",
      status: "read",
    },
    {
      id: 3,
      title: "Security Alert",
      description:
        "A new security patch has been released. Please update your system.",
      createdAt: "2024-11-17",
      status: "unread",
    },
    {
      id: 4,
      title: "New User Registration",
      description: "A new user has successfully registered.",
      createdAt: "2024-11-16",
      status: "read",
    },
  ]);

  // Mark notification as read/unread
  const toggleReadStatus = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              status: notification.status === "unread" ? "read" : "unread",
            }
          : notification
      )
    );
  };

  // Delete notification
  const deleteNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="">
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Title
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Description
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Date
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 text-sm font-medium text-gray-800">
                  {notification.title}
                </td>
                <td className="py-3 px-6 text-sm text-gray-600">
                  {notification.description}
                </td>
                <td className="py-3 px-6 text-sm text-gray-500">
                  {notification.createdAt}
                </td>
                <td className="py-3 px-6 text-sm">
                  {notification.status === "unread" ? (
                    <CircleX className="text-yellow-500" />
                  ) : (
                    <CheckCircle className="text-green-500" />
                  )}
                </td>
                <td className="py-3 px-6 text-sm">
                  <button
                    onClick={() => toggleReadStatus(notification.id)}
                    className="text-blue-500 mr-3"
                  >
                    {notification.status === "unread"
                      ? "Mark as Read"
                      : "Mark as Unread"}
                  </button>
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="text-red-500"
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
