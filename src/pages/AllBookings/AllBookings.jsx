import React from 'react'
import './allBookings.css';
import { Link } from 'react-router-dom';

const AllBookings = () => {
  return (
    <div className='all-booking__section'>
      <h1>All Bookings</h1>

      <Link to="/bookings/add">
        <button>Add a new Customer</button>
      </Link>

    </div>
  )
}

export default AllBookings