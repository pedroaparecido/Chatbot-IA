'use client'

import { Chat } from "@/components/Chat";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession()

  if (session.status === 'unauthenticated') redirect('/login')

  return (
    <div className="flex flex-col min-h-screen bg-neutral-100 items-center justify-center">
      <button onClick={() => signOut()}>Sair</button>
      <Chat />
    </div>
  );
}
