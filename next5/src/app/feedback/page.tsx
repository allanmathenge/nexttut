"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

const initialState = {
  name: "",
  email: "",
  message: ""
}

export default function Feedback() {

  const [ data, setData ] = useState(initialState)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, message } = data

    const res = await fetch('http://localhost:3000/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, message
      })
    })

    await res.json()

    router.push('/thank-you')
  }

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <label>Name:</label>

      <input
        type='text'
        name='name'
        placeholder='Enter your name...'
        value={data.name}
        onChange={handleChange}
      />
    
      <label>Email:</label>

      <input
        type='email'
        name='email'
        placeholder='Enter your name...' 
        value={data.email}
        onChange={handleChange}
      />
      
      <label htmlFor="input">Message</label>

      <textarea
        name='message'
        value={data.message}
        onChange={handleChange}
        type='text'
        placeholder='Enter your message'>
      </textarea>

      <button type='submit'>Submit</button>

    </form>
  )
}
