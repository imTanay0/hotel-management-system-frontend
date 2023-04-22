import React from 'react'
import { Link } from 'react-router-dom';

import './allBookings.css';

const AllBookings = () => {
  return (
    <section className='all-booking__section'>
      <h1>All Bookings</h1>

      <Link to="/bookings/add">
        <button className='btn'>Book a new customer {`>`}</button>
      </Link>

      <div className='table-container'>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Booking from</th>
              <th>Booking to</th>
              <th>Contact no.</th>
              <th>Type of Room</th>
              <th>Rate Negotiated</th>
            </tr>

            <tr>
              <td>User Name 1</td>
              <td>12-09-2022</td>
              <td>12-10-2022</td>
              <td>098394898</td>
              <td>Family Suite</td>
              <td>5000</td>
            </tr>

            <tr>
              <td>User 2</td>
              <td>12-09-2022</td>
              <td>12-10-2022</td>
              <td>098394898</td>
              <td>Family Suite</td>
              <td>5090</td>
            </tr>

            <tr>
              <td>User 3</td>
              <td>12-09-2022</td>
              <td>12-10-2022</td>
              <td>098394898</td>
              <td>Family Suite</td>
              <td>5000</td>
            </tr>

            <tr>
              <td>User 4</td>
              <td>12-09-2022</td>
              <td>12-10-2022</td>
              <td>098394898</td>
              <td>Family Suite</td>
              <td>5000</td>
            </tr>

            <tr>
              <td>User 5</td>
              <td>12-09-2022</td>
              <td>12-10-2022</td>
              <td>098394898</td>
              <td>Family Suite</td>
              <td>5000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AllBookings