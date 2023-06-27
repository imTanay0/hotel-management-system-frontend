import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './addBooking.css'

const AddBooking = () => {

  const [roomTypes, setRoomTypes] = useState([]);
  const [customer, setCustomer] = useState({
    dateOfBooking: "",
    bookingFrom: "",
    bookingTo: "",
    customerName: "",
    contactNo: "",
    roomTypeName: "",
    rateNegotiated: "",
  })

  useEffect(() => {
    const getAllRoomTypes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/roomtype/getall', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const result = await response.json();

        if (result.success) {
          setRoomTypes(result.roomTypes);
        } else {
          throw new Error(`Failed to fetch room types: ${result.message}`);
        }
      } catch (error) {
        alert(error.message);
      }
    }

    getAllRoomTypes();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch('http://localhost:8080/api/v1/user/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer)
      })

      const data = await response.json();

      if (data.success) {
        alert("Booking Successful");
      } else {
        throw new Error(data.message);
      }

    } catch (error) {
      alert(error.message);
    } finally {
      setCustomer({
        dateOfBooking: "",
        bookingFrom: "",
        bookingTo: "",
        customerName: "",
        contactNo: "",
        roomTypeName: "",
        rateNegotiated: "",
      })
    }
  }


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
        <form onSubmit={handleSubmit}>
          <label htmlFor="dateOfBooking">Date of booking: </label>
          <input
            id='dateOfBooking'
            type="date"
            value={customer.dateOfBooking}
            onChange={e => setCustomer({ ...customer, dateOfBooking: e.target.value })}
            required
          />

          <label htmlFor='bookingFrom'>Booking from: </label>
          <input
            id='bookingFrom'
            type="date"
            value={customer.bookingFrom}
            onChange={e => setCustomer({ ...customer, bookingFrom: e.target.value })}
            required
          />

          <label htmlFor='bookingTo'>Booking to: </label>
          <input
            id='bookingTo'
            type="date"
            value={customer.bookingTo}
            onChange={e => setCustomer({ ...customer, bookingTo: e.target.value })}
            required
          />

          <label htmlFor='customerName'>Name of the Customer: </label>
          <input
            id='customerName'
            type="text"
            value={customer.customerName}
            onChange={e => setCustomer({ ...customer, customerName: e.target.value })}
            required
          />

          <label htmlFor='contactNo'>Contact no.: </label>
          <input
            id='contactNo'
            type="text"
            value={customer.contactNo}
            onChange={e => setCustomer({ ...customer, contactNo: e.target.value })}
            required
          />

          <label htmlFor="roomType">Type of Room: </label>
          <input
            list='roomTypeOptions'
            placeholder='Enter the type of room'
            required
            onSelect={e => setCustomer({ ...customer, roomTypeName: e.target.value })}
          />
          <datalist id='roomTypeOptions'>
            {roomTypes.map((roomType, idx) => (
              <option key={idx} value={roomType.room_type}>{roomType.room_type}</option>
            ))}
          </datalist>

          <label htmlFor='rateNegotiated'>Rate Negotiated: </label>
          <input
            id='rateNegotiated'
            type="text"
            value={customer.rateNegotiated}
            onChange={e => setCustomer({ ...customer, rateNegotiated: Number(e.target.value) })}
            required
          />

          <button className='btn' type="submit">Book Customer</button>
        </form>
      </div>

    </section>
  )
}

export default AddBooking