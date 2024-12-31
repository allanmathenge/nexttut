import React from 'react'

export default async function fetchUser(_id) {
  console.log(_id)
  const res = await fetch(`http://localhost:3000/api/users/${_id}`)

  if (!res.ok) {
    return res.json("Error fetching user")
  }

  return res.json()
}
