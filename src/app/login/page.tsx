'use client'

import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React from "react"

export default function Login() {
    return(
        <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-100">
            <Card className="w-[700px] h-[500px] shadow-2xl flex flex-col justify-center items-center gap-[30px]">
                <CardTitle>Login</CardTitle>
                <form className="flex flex-col items-start justify-center">
                    <label className="text-lg">Email:</label>
                    <Input className="mb-[10px] shadow-xl" />
                    <label className="text-lg">Password:</label>
                    <Input className="mb-[20px] shadow-xl" />
                    <Button className="w-[100%]">Enviar</Button>
                </form>
                    <Button className="w-[223px]">Google</Button>
                    <Button className="w-[223px]">Github</Button>
            </Card>
        </div>
    )
}