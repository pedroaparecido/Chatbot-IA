import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import userSchema from './modules/user/user.model'
import { ConnectToDatabase } from '@/lib/middlewares/mongodb'

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
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
                ConnectToDatabase()
                const email = credentials.email
                if (!credentials) return null

                const user = await userSchema.findOne({ email: email })

                if (!user) return null
                
                if (user)
                    return { email: user.email, id: user._id }

                return null
            }
        })
    ],
    secret: 'abacadabra'
})