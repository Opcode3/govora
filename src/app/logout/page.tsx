"use client";
import React, { useEffect } from "react";
import LoadingPage from "@/components/common/LoadingPage";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  // Function to be executed after 2 seconds
  const executeAfterDelay = () => {
    deleteCookie("jwttoken", { path: "/" });
    deleteCookie("firstname", { path: "/" });
    deleteCookie("username", { path: "/" });
    router.push("/login/admin");
  };

  useEffect(() => {
    // Set a timeout to run the function after 2 seconds
    const timeoutId = setTimeout(() => {
      executeAfterDelay();
    }, 2000); // 2 seconds delay

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  return <LoadingPage />;
}
