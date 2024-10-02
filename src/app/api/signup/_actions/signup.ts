'use server'

import { FieldValues } from "react-hook-form";
import { redirect } from "next/navigation";
import { redis } from "@/lib/redis";
import { create } from "../../../../../modules/user/user.service";
import { ConnectToDatabase } from "@/lib/middlewares/mongodb";

export async function HandleApi(data: FieldValues) {
    try {
        ConnectToDatabase()
        const res = await create(data)
        console.log(res)
        if (res._id) {
            await redis.set(`${res._id}`, `${data}`)
        }
        //redirect('/login')
    } catch (err) {
        console.log(err)
    }
}