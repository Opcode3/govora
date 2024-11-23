// components/StatisticsCard.tsx
import React from "react";

interface StatisticsCardProps {
  title: string;
  value: string | number;
  icon: JSX.Element;
  colorClass: string; // Tailwind color classes like 'bg-blue-500', 'bg-green-500', etc.
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  value,
  icon,
  colorClass,
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${colorClass} text-white`}>
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-white rounded-full text-gray-700">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
