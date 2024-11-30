"use client";
import React from "react";
import {
  Bell,
  Briefcase,
  Contact,
  LayoutGrid,
  Podcast,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Aside() {
  const pathname = usePathname();
  const menuList = [
    {
      name: "Dashboard",
      url: "/",
      icon: <LayoutGrid className=" stroke-1 size-8" />,
      tags: ["/admin"],
    },
    {
      name: "Ministries",
      url: "/ministries",
      icon: <Briefcase className=" stroke-1 size-8" />,
      tags: ["/admin/ministries"],
    },
    {
      name: "Reports",
      url: "/reports",
      icon: <Podcast className=" stroke-1 size-8" />,
      tags: ["/admin/reports", "/admin/reports/new"],
    },
    {
      name: "Users",
      url: "/users",
      icon: <Users className=" stroke-1 size-8" />,
      tags: ["/admin/users"],
    },
    {
      name: "Staffs",
      url: "/staffs",
      icon: <Contact className=" stroke-1 size-8" />,
      tags: ["/admin/staffs"],
    },
    {
      name: "Notification",
      url: "/notifications",
      icon: <Bell className=" stroke-1 size-8" />,
      tags: ["/admin/notifications"],
    },
  ];

  return (
    <aside className=" bg-gray-800 h-screen">
      <div className="pt-6 px-6">
        <Image
          src={"/images/logo-white.png"}
          alt="Govora"
          width={160}
          height={400}
          className=" "
        />
      </div>
      <ul className=" mt-16">
        {menuList.map((menuItem, index) => (
          <li key={index}>
            <Link
              href={`/admin${menuItem.url}`}
              className={`flex items-center gap-2 px-6 py-6 ${
                menuItem.tags.includes(pathname)
                  ? "bg-green-50 text-gray-800"
                  : " text-green-50 "
              }`}
            >
              {menuItem.icon}
              <span className="text-xl">{menuItem.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
