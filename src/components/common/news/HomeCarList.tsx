// pages/index.tsx
import React from "react";
import NewsCard from "./Card";

const newsData = [
  {
    title:
      "AAC Party In Abia Demands Breakdown Of Expenses In Governor Otti's Smart School Initiative",
    summary:
      "The African Action Congress (AAC) has called on the Abia State government to provide a comprehensive breakdown of the expenses involved in the recently inaugurated Smart School, that has only one smart television with no required ICT gadgets.",
    date: "2024-04-25T10:30:00Z",
    imageUrl: "/news/8.png", // Replace with your image path
    reporterName: "Okafor Fred",
    reporterImage: "/news/reporter/4.png",
  },
  {
    title: "Integrating AI into retail industry will boost Nigeria’s economy",
    summary:
      "A software engineer and digital transformation consultant, Faheem Abubakar, has opined that the integration of artificial intelligence into the country’s retail industry will boost the economy.",
    date: "2024-05-10T14:45:00Z",
    imageUrl: "/news/4.jpeg",
    reporterName: "Emeka Joseph",
    reporterImage: "/news/reporter/2.png",
  },
  {
    title: "PDP, NNPP clash over Osun gov’s reelection bid",
    summary:
      "The recent economic report highlights significant improvements in key sectors...",
    date: "2024-04-25T10:30:00Z",
    imageUrl: "/news/5.jpg", // Replace with your image path
    reporterName: "Precious",
    reporterImage: "/news/reporter/3.png",
  },
  {
    title: "Why I’m against tax reform bills — Ndume",
    summary:
      "The federal government announced a series of infrastructure projects...",
    date: "2024-05-10T14:45:00Z",
    imageUrl: "/news/6.jpg",
    reporterName: "Chidinma",
    reporterImage: "/news/reporter/1.png",
  },
  {
    title: "CBN raises interest rate on SDF to 26.5%",
    summary:
      "The Central Bank of Nigeria, CBN, today announced it has raised the interest rate on deposits of commercial banks in its Standing Deposit Facility (SDF) to 26.5 percent effective immediately.",
    date: "2024-04-25T10:30:00Z",
    imageUrl: "/news/3.webp", // Replace with your image path
    reporterName: "Okafor Fred",
    reporterImage: "/news/reporter/4.png",
  },
  {
    title: "Anambra attracts $500m funding commitments, strategic partnerships",
    summary:
      "The state Governor, Prof. Charles Chukwuma Soludo, who said the funding is to enable the transformation of the state into a major economic hub, added that he is inviting investors, stakeholders, and development partners to join this transformative journey.",
    date: "2024-05-10T14:45:00Z",
    imageUrl: "/news/2.webp",
    reporterName: "Chidinma",
    reporterImage: "/news/reporter/1.png",
  },
  {
    title:
      "NCC boss, Maida appointed into global telecoms organisation, IIC board",
    summary:
      "The Executive Vice Chairman and Chief Executive Officer, CEO, of the Nigerian Communications Commission, NCC, Dr. Aminu Maida, has been appointed to the Board of Directors of the International Institute of Communications (IIC).",
    date: "2024-04-25T10:30:00Z",
    imageUrl: "/news/1.webp", // Replace with your image path
    reporterName: "Precious",
    reporterImage: "/news/reporter/3.png", // Replace with your image path
  },
  {
    title: "Government Launches New Infrastructure Projects",
    summary:
      "The federal government announced a series of infrastructure projects...",
    date: "2024-05-10T14:45:00Z",
    imageUrl: "/news/news_2.jpg",
    reporterName: "Emeka Joseph",
    reporterImage: "/news/reporter/2.png",
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
