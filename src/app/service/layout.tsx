import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login - Govora Platform",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" p-10  ">
      <div className=" rounded-2xl p-4 max-w-[500px] mx-auto ">
        <div className="pt-4 pb-5 relative flex items-center justify-center">
          <Image
            src={"/images/logo.png"}
            alt="Govora"
            width={200}
            height={60}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
