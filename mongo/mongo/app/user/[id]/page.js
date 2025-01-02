import React from "react"
import fetchUser from "@/lib/fetchUser"
import OneUser from "@/app/components/OneUser"

export default async function User({ params }) {
    const { id } = await params
    const user = await fetchUser(id)

    const handleDelete = async ({ params }) => {
      const { id } = params
      // const res = await fetch(`/api/user/${id}`, {
      //   method: 'DELETE',
      //   'Content-Type':'application/json'
      // })

      // if (res.ok) {
      //   router.push('/users')
      // }
    }

  return (
    <section className=" max-w-lg mx-auto flex justify-between items-center mt-5 border border-slate-500">

      <OneUser user={user} id={id} />

    </section>
  )
}
