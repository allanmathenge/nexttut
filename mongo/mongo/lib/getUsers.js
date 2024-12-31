import React from "react"

export default async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users")

  const data = await res.json()

  return data
}
