'use client'
import { Input } from "./ui/input"
import { FieldValues, useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Card, CardTitle } from "./ui/card"
import { auth } from "../../auth"
import { HandleLoginApi } from "@/app/login/login"

export default function FormLogin() {
    const { handleSubmit, register } = useForm()

    const handleApi = async (data: FieldValues) => {
        HandleLoginApi(data)
    }


    return(
        <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-100">
            <Card className="w-[700px] h-[500px] shadow-2xl flex flex-col justify-center items-center gap-[30px]">
                <CardTitle>Login</CardTitle>
                <form className="flex flex-col items-start justify-center" onSubmit={handleSubmit(handleApi)}>
                    <label className="text-lg">Email:</label>
                    <Input className="mb-[10px] shadow-xl" {...register('email')} />
                    <label className="text-lg">Password:</label>
                    <Input className="mb-[20px] shadow-xl" {...register('password')} />
                    <Button className="w-[100%]">Enviar</Button>
                </form>
                    <Button className="w-[223px]">Google</Button>
                    <Button className="w-[223px]">Github</Button>
            </Card>
        </div>
    )
}