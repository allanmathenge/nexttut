import React from "react"
import getUsers from "@/lib/getUsers"
import User from "../components/User"

export default async function Users() {
    const users = await getUsers()
    
  return (
    <section className="max-w-lg mx-auto h-[100%] flex flex-col items-center border border-slate-400 mt-5">
        {
            users 
            ? users.map((user) => (
                <ul key={user.email} className="w-full p-1">
                    <li>
                        <User key={user._id} {...user} />
                    </li>
                    <div className="border w-full border-slate-300 my-1"/>
                </ul>
            ))
            : <p>Users not found</p>
        }
    </section>
  )
}
