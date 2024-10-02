'use client'

import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React from "react"
import { FieldValues, useForm } from 'react-hook-form'
import { HandleApi } from "../api/signup/_actions/signup"

export default function Register() {
    const { handleSubmit, register } = useForm()

    const handleSignup = async (data: FieldValues) => {
        HandleApi(data)
    }

    return(
        <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-100">
            <Card className="w-[700px] h-[500px] shadow-2xl flex flex-col justify-center items-center gap-[30px]">
                <CardTitle>Signup</CardTitle>
                <form className="flex flex-col items-start justify-center" onSubmit={handleSubmit(handleSignup)}>
                    <label className="text-lg">Name:</label>
                    <Input className="mb-[10px] shadow-xl" {...register("name")} />
                    <label className="text-lg">Email:</label>
                    <Input className="mb-[10px] shadow-xl" {...register("email")} />
                    <label className="text-lg">Password:</label>
                    <Input className="mb-[20px] shadow-xl" {...register("password")} />
                    <Button className="w-[100%]" type="submit">Enviar</Button>
                </form>
            </Card>
        </div>
    )
}