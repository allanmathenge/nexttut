import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials: {
                username:{
                    label: "Your username:",
                    type:"text",
                    placeholder:"Your username"
                },
                password: {
                    label:"Password:",
                    type: "password",
                    placeholder:"Your password"
                }

            },
            async authorize(credentials) {
                // Retrieve your data here where you store user informations
                const user = { id: 2626, name:"Allan", password: "nextauth" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
}
