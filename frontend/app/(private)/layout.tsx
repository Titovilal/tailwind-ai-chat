"use client";
import MainNav from "@/components/main-nav";
import React, { ReactNode } from "react";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-[3.5rem,1fr]">
      <MainNav />
      {children}
    </div>
  );
}