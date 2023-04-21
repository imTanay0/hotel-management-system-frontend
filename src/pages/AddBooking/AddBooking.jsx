import React from 'react'
import { Link } from 'react-router-dom'

import './addBooking.css'

const AddBooking = () => {
  return (
    <div className='booking-section'>
      <h1>Book a New Customer</h1>
      <Link to="/bookings">
        <button>{`<`} Back</button>
      </Link>

      <div className='booking-section-form'>
        <form>
          <span>Date of Booking: </span>
          <input type="date" />

          <br />
          <br />

          <span>Booking from: </span>
          <input type="text" />

          <br />
          <br />

          <span>Booking to: </span>
          <input type="text" />

          <br />
          <br />

          <label>Name of the Customer: </label>
          <input type="text" />

          <br />
          <br />

          <span>Contact no.: </span>
          <input type="text" />

          <br />
          <br />

          <span>Type of Room: </span>
          <input type="text" />

          <br />
          <br />

          <span>Rate Negotiated: </span>
          <input type="text" />

          <br />
          <br />
        </form>
      </div>

    </div>
  )
}

export default AddBooking