'use client'

import { Chat } from "@/components/Chat";
import Navbar from "@/components/Navbar";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession()

  if (session.status === 'unauthenticated') redirect('/login')

  return (
    <div className="flex flex-col bg-neutral-100 items-center justify-center">
      <Navbar />
      
      <Chat sess />
    </div>
  );
}
