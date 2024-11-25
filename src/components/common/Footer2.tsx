// components/Footer.tsx
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export const Footer2 = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo and Description */}
        <div className="text-center md:text-left md:w-1/3">
          <h2 className="text-3xl font-bold text-white mb-3">Govora</h2>
          <p className="text-sm">
            Bridging the gap between Nigerian citizens and governance. Stay
            informed, engaged, and empowered.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/leaders"
                  className="hover:text-blue-400 transition"
                >
                  Leaders
                </Link>
              </li>
              <li>
                <Link
                  href="/ministries"
                  className="hover:text-blue-400 transition"
                >
                  Ministries
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="hover:text-blue-400 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-blue-400 transition">
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact and Social Media */}
        <div className="md:w-1/3 text-center md:text-right">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:contact@govora.ng" className="hover:text-blue-400">
              contact@govora.ng
            </a>
          </p>
          <p className="text-sm mb-4">Phone: +234 123 456 7890</p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-blue-400 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Govora. All rights reserved.
      </div>
    </footer>
  );
};
