import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import userSchema from './modules/user/user.model'
import { redis } from '@/lib/redis'
import { redirect } from 'next/navigation'

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: 'Email'
                },
                password: {
                    label: 'Password'
                }
            },
            async authorize(credentials) {
                if (!credentials) return null

                const user = await userSchema.find({ email: credentials.email })

                if (!user) return null

                await redis.get(`${credentials.email}`)

                redirect('/')
            }
        })
    ]
})