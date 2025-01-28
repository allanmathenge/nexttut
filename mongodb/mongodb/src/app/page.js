"use client"

import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({ name:"", email:"", password:"" })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/register', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      
      console.log(data)
      if (res.ok) {
        setMessage("User registered successfully!")
        setFormData({name:"", email:"", password:""})
      } else {
        setMessage(data.error || "something went wrong")
      }

    } catch(error) {
      setMessage(data.error || "An error occurred. Please try again")
    }
  }
  
  return (
    <>
      <h1>Register</h1>
      <form 
        onSubmit={handleSubmit}
        className="bg-white/80 p-2 flex flex-col gap-3"
      >
        <input 
          type="text"
          name="name"
          placeholder="Your name"
          className="p-3"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input 
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Your password"
          className="p-3"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      { message && <p>{message}</p>}
    </>
  );
}
