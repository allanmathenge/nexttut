import React from 'react'

export default async function fetchUser(id) {
  const res = await fetch(`http://localhost:3000/api/user/${id}`)

  if (!res.ok) {
    return res.json("Error fetching user")
  }

  const data = await res.json()

  return data
}
