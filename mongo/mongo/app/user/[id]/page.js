import React from "react"
import fetchUser from "@/lib/fetchUser"

export default async function User({ params }) {
    const { id } = await params
    // await fetchUser(id)
    console.log("user id:", id)
  return (
    <div>User</div>
  )
}
