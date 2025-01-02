"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export default function OneUser({ user, id }) {
    const router = useRouter()

    const handleDelete = async () => {
        const res = await fetch(`/api/user/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'},

        })

        if (res.ok) {
            router.push('/users')
        }

        window.alert(`User ${user.name} successfully deleted`)
    }

    const handleEdit = () => {
        router.push('/register')
    }

  return (
    <>
        <div className="flex flex-col ">
            <p>{user.name}</p>
            <div className="border border-slate-500" />
            <p>{user.email}</p>
        </div>

        <div>
            <button onClick={handleDelete} className=" px-6 border border-slate-400" type="button">Delete</button>
            <button onClick={handleEdit} className=" px-6 border border-slate-400" type="button">Edit</button>
        </div>
    </>
  )
}
