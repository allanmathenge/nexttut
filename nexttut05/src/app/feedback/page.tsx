"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const initialState = {
  name: "",
  email: "",
  message: "",
}

export default function Feedback() {
  const router = useRouter()
  const [ data, setData ] = useState(initialState)

  const handleSubmit = async (e:FormEvent<HTMLElement>) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:3000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
  
      await res.json()
      // router.push('/thank-you')

    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e:FormEvent<HTMLElement>) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }
  
  return (
    <form onSubmit={handleSubmit} className='w-[640px] flex flex-col mx-auto pt-3 gap-3'>
      <label>Name</label>
      <input 
        type="text"
        name="name"
        placeholder="Enter your name..."
        value={data.name}
        onChange={handleChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={data.email}
        onChange={handleChange}
      />
      <label>Message</label>
      <textarea
        type="text"
        name="message"
        placeholder="Enter your message"
        value={data.message}
        onChange={handleChange}
      >

      </textarea>
      <button type='submit'>Submit</button>
    </form>
  )
}
