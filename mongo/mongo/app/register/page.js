"use client"

import React, { useState } from "react";

export default function Home() {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  })
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setFormData({ name:"", email:"", password:""})
        setMessage("User successfully registered")
      }

    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-slate-50 p-3 mt-3 rounded">
      <h1 className="text-xl font-bold my-3">Create user</h1>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <label className="text-slate-600 font-semibold text-sm">Your Name</label>
          <input 
            type="text"
            placeholder="Enter your name"
            name="name"
            className="outline-none border border-slate-400 shadow-sm p-2 rounded"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-slate-600 font-semibold text-sm">Your Email</label>
          <input 
            type="text"
            placeholder="Enter your email"
            name="email"
            className="outline-none border border-slate-400 shadow-sm p-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-slate-600 font-semibold text-sm">Your Password</label>
          <input 
            type="password"
            placeholder="Enter your password"
            name="password"
            className="outline-none border border-slate-400 shadow-sm p-2 rounded"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>

        <button type="submit" className="border border-slate-400 bg-slate-400 rounded text-slate-100 text-xl font-bold">Submit</button>
        {
          message && (<p className="text-center">{message}</p>)
        }
      </form>
    </div>
  );
}
