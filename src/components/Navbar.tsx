'use client'

import { signOut } from "next-auth/react"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="flex w-full mb-[31px]">
            <div className="flex p-[20px] justify-start items-center bg-white w-full gap-20">
                <Link href="/chat">Chat</Link>
                <Link href="/login">Login</Link>
                <Link href="/signup">Signup</Link>
            </div>
            <div className="flex justify-end items-center bg-white pr-[30px]">
                <button onClick={() => signOut()}>Sair</button>
            </div>
        </div>
    )
}