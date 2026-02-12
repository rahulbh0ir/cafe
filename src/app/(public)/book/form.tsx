"use client"

import Image from "next/image";
import { useState } from "react";

import FormImg from "../../../../public/book/form-1.jpg";

const initialData = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: ""
}


export default () => {

  const [form, setForm] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {

      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json()
      console.log(data.reservation)

      if (!response.ok) {
        throw new Error(data.message)
      }

      setSuccess(true);
      setForm(initialData);

    }
    catch (error: any) {
      setError(error.message || "Something went wrong")
    }
    finally {
      setLoading(false)
    }

  }

  if (success) return (
    <div className="form-wrapper">
      {/* <h2>Thank you</h2>
      <p>You Reservation has been confirmed</p>
      <button type="submit" className="submit-btn" onClick={() => setSuccess(false)} >
        Book
      </button> */}
      <div className="form-image">
        <Image src={FormImg} priority alt="" fill />
      </div>
    </div>
  )


  return (

    <div className="form-wrapper">
      <h2>Reservation Details</h2>
      <p className="form-intro">
        Fill in the details below and we’ll have a table ready for you.
      </p>


      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-row">
          <div className="form-field">
            <label>Name</label>
            <input type="text" placeholder="Your full name" name="name" value={form.name} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 XXXXX XXXXX" name="phone" value={form.phone} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" name="email" value={form.email} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label>Date</label>
            <input type="date" value={form.date} name="date" onChange={handleChange} />
          </div>

          <div className="form-field">
            <label>Time</label>
            <input type="time" value={form.time} name="time" onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading} >
          {loading ? "Booking..." : "Book"}
        </button>
        {error ? <p>Something went wrong!</p> : null}
      </form>
    </div>
  )
}
