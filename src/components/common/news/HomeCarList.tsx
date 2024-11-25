// pages/index.tsx
import React from "react";
import NewsCard from "./Card";

const newsData = [
  {
    title: "Nigeria’s Economy Shows Growth in Q1 2024",
    summary:
      "The recent economic report highlights significant improvements in key sectors...",
    date: "2024-04-25T10:30:00Z",
    imageUrl: "/news/news_1.png", // Replace with your image path
    reporterName: "John Doe",
    reporterImage: "/news/reporter.jpg", // Replace with your image path
  },
  {
    title: "Government Launches New Infrastructure Projects",
    summary:
      "The federal government announced a series of infrastructure projects...",
    date: "2024-05-10T14:45:00Z",
    imageUrl: "/news/news_3.webp",
    reporterName: "Jane Smith",
    reporterImage: "/news/reporter_1.jpg",
  },
  {
    title: "Nigeria’s Economy Shows Growth in Q1 2024",
    summary:
      "The recent economic report highlights significant improvements in key sectors...",
    date: "2024-04-25T10:30:00Z",
    imageUrl: "/news/news_4.jpg", // Replace with your image path
    reporterName: "John Doe",
    reporterImage: "/news/reporter.jpg", // Replace with your image path
  },
  {
    title: "Government Launches New Infrastructure Projects",
    summary:
      "The federal government announced a series of infrastructure projects...",
    date: "2024-05-10T14:45:00Z",
    imageUrl: "/news/news_2.jpg",
    reporterName: "Jane Smith",
    reporterImage: "/news/reporter_1.jpg",
  },
  {
    title: "Nigeria’s Economy Shows Growth in Q1 2024",
    summary:
      "The recent economic report highlights significant improvements in key sectors...",
    date: "2024-04-25T10:30:00Z",
    imageUrl: "/news/news_1.png", // Replace with your image path
    reporterName: "John Doe",
    reporterImage: "/news/reporter.jpg", // Replace with your image path
  },
  {
    title: "Government Launches New Infrastructure Projects",
    summary:
      "The federal government announced a series of infrastructure projects...",
    date: "2024-05-10T14:45:00Z",
    imageUrl: "/news/news_3.webp",
    reporterName: "Jane Smith",
    reporterImage: "/news/reporter_1.jpg",
  },
  {
    title: "Nigeria’s Economy Shows Growth in Q1 2024",
    summary:
      "The recent economic report highlights significant improvements in key sectors...",
    date: "2024-04-25T10:30:00Z",
    imageUrl: "/news/news_4.jpg", // Replace with your image path
    reporterName: "John Doe",
    reporterImage: "/news/reporter.jpg", // Replace with your image path
  },
  {
    title: "Government Launches New Infrastructure Projects",
    summary:
      "The federal government announced a series of infrastructure projects...",
    date: "2024-05-10T14:45:00Z",
    imageUrl: "/news/news_2.jpg",
    reporterName: "Jane Smith",
    reporterImage: "/news/reporter_1.jpg",
  },
];

const HomeCardList: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-4">
      {newsData.map((news, index) => (
        <NewsCard key={index} {...news} />
      ))}
    </div>
  );
};

export default HomeCardList;
