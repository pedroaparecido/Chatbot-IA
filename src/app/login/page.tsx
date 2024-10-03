'use client'

import FormLogin from "@/components/FormLogin"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React from "react"
import { useForm } from "react-hook-form"

export default function Login() {
    return(
        <div>
            <FormLogin />
        </div>
    )
}