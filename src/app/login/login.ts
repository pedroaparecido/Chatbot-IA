'use server'

import { FieldValues } from "react-hook-form"
import { signIn } from "../../../auth"
import { redis } from "@/lib/redis"

export async function HandleLoginApi(data: FieldValues) {
    try {
        const  email = data.email
        const  password = data.password
        await signIn('credentials', { email, password })
        
    } catch (err) {
        throw err
    }
}