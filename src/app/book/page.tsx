"use client"

import { FormEvent } from "react";
import "./book.css";
import Image from "next/image";
import bg from "../../public/images/formBg3.jpg"



export default () => {
  
  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }


  return (
    <div className="book">
      <section>
        <div className="book-bg">
          <Image 
            alt="Form Background"
            src={bg}
            style={{
              width: "100%",
              height : "auto"
            }}
            className="form-img"
          />
        </div>
        <div className="book-form">
          <h2>MAKE A RESERVATION</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Date" />
            <input type="text" placeholder="Time" />
            <input type="submit" value={"Book"}/>
          </form>
        </div>
      </section>
    </div>
  )
}
