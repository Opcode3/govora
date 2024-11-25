// components/NewsCard.tsx
import { getRelativeTime } from "@/utils/datetime";
import Image from "next/image";
import React from "react";

// Define the prop types
interface NewsCardProps {
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  reporterName: string;
  reporterImage: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  summary,
  date,
  imageUrl,
  reporterName,
  reporterImage,
}) => {
  return (
    <div className="max-w-md overflow-hidden  transition-shadow duration-300 group">
      {/* Image Container with Overlay */}
      <div className="relative h-48 w-full rounded-sm overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="py-2">
        <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{summary}</p>

        {/* Reporter Information */}
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center space-x-2">
            <Image
              src={reporterImage}
              alt={reporterName}
              width={46}
              height={46}
              className="rounded-2xl"
            />
            <p className=" text-gray-700 flex flex-col text-sm">
              <strong className=" font-medium text-lg">{reporterName}</strong>
              {getRelativeTime(date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
