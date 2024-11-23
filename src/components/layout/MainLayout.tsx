"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface MainLayoutInterface {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function MainLayout({ children }: MainLayoutInterface) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
}
