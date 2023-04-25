import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './allBookings.css';


const AllBookings = () => {

  const [bookedCustomers, setBookedCustomers] = useState([]);

  useEffect(() => {

    const getBookedCustomers = async () => {

      try {
        const response = await fetch('http://localhost:8080/api/v1/user/bookings', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })

        if (response.ok) {
          const result = await response.json();

          const data = result.users;

          for (let i = 0; i < data.length; i++) {
            data[i].booking_from = new Date(data[i].booking_from).toLocaleDateString();
            data[i].booking_to = new Date(data[i].booking_to).toLocaleDateString();
            data[i].rate_negotiated = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR' }).format(data[i].rate_negotiated);
            data[i].room_type.name = data[i].room_type.name.charAt(0).toUpperCase() + data[i].room_type.name.slice(1);
            data[i].name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
            data[i].phone_number = data[i].phone_number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
          }

          setBookedCustomers(data);
        }

      } catch (error) {
        alert(error.message);
      }
    }

    getBookedCustomers();

  }, [])


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

            {bookedCustomers.map((a) => (
              <tr key={a.name}>
                <td>{a.name}</td>
                <td>{a.booking_from}</td>
                <td>{a.booking_to}</td>
                <td>{a.phone_number}</td>
                <td>{a.room_type.name}</td>
                <td>{a.rate_negotiated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AllBookings