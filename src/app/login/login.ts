'use server'

import { FieldValues } from "react-hook-form"
import { signIn } from "../../../auth"

export async function HandleLoginApi(data: FieldValues) {
    try {
        const  email = data.email
        const  password = data.password
        const con = await signIn('credentials', { email, password })
        console.log(con)
    } catch (err) {
        throw err
    }
}