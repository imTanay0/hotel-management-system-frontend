import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './addBooking.css'

const AddBooking = () => {

  const [customer, setCustomer] = useState({
    dateOfBooking: "",
    bookingFrom: "",
    bookingTo: "",
    customerName: "",
    contactNo: "",
    roomTypeName: "",
    rateNegotiated: 0,
  })


  return (
    <section className='booking-section'>
      <h1>Book a New Customer</h1>
      <div className="booking-section-back-btn">
        <Link to="/bookings">
          <button className='btn'>
            {`< `} Back
          </button>
        </Link>
      </div>

      <div className='form-container'>
        <form>
          <span>Date of Booking: </span>
          <input type="date" />

          <span>Booking from: </span>
          <input type="date" />

          <span>Booking to: </span>
          <input type="date" />

          <label>Name of the Customer: </label>
          <input type="text" />

          <span>Contact no.: </span>
          <input type="text" />

          <span>Type of Room: </span>
          <input type="text" />

          <span>Rate Negotiated: </span>
          <input type="text" />

          <button className='btn' type="submit">Book Customer</button>
        </form>
      </div>

    </section>
  )
}

export default AddBooking