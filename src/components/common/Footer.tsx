// components/Footer.tsx
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const linkList = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/leader",
    },
    {
      name: "FAQs",
      url: "",
    },
    {
      name: "Live Report",
      url: "",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="  w-full max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="">
          <div className="mb-4">
            <h1 className=" font-bold text-4xl">Govora</h1>
            <p className=" text-xl italic">
              Empowering citizens and promoting transparency in governance.
            </p>
          </div>
          <ul className="flex items-center gap-3 ">
            {linkList.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="text-base bg-gray-100 bg-opacity-10 px-6 py-2 rounded-sm block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 text-center md:text-right">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-base">
            Email:{" "}
            <a href="mailto:contact@govora.ng" className="hover:text-blue-400">
              contact@govora.ng
            </a>
          </p>
          <p className="text-base mb-4">Phone: +234 123 456 7890</p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-green-500 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Govora. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
