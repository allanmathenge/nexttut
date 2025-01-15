"use client"
// You must use an AuthProvider for client components to useSession hook
import React from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import UserCard from "../components/UserCard"

export default function ClientPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('api/auth/signin?callbackUrl=/client')
        },
    })
  return (
    <section className="">
        <UserCard user={session?.user} pagetype={"Client"} />
    </section>
  )
}
