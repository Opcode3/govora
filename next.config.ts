import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
