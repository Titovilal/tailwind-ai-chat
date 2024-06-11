import SessionProvider from "@/components/SessionProvider";
import MainNav from "@/components/main-nav";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function PrivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession();
  return (
    <div className="min-h-screen grid grid-cols-[3rem,1fr]">
      <SessionProvider session={session}>
        <MainNav />
        {children}
      </SessionProvider>
    </div>
  );
}
