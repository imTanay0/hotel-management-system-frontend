import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './allBookings.css';

const AllBookings = () => {
  const [bookedCustomers, setBookedCustomers] = useState([]);
  const [availableRooms, setAvailableRooms] = useState({});

  useEffect(() => {
    const fetchBookedCustomers = async () => {
      try {
        const response = await fetch('http://13.51.157.224:8080/api/v1/user/bookings', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();

        if (response.ok) {
          const { users, availableRoomsByUser } = result;

          const formattedCustomers = users.map(customer => {
            const {
              booking_from,
              booking_to,
              rate_negotiated,
              room_type: { name },
              name: customerName,
              phone_number,
              availableRooms,
              _id,
            } = customer;

            return {
              booking_from: new Date(booking_from).toLocaleDateString(),
              booking_to: new Date(booking_to).toLocaleDateString(),
              rate_negotiated: new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'INR',
              }).format(rate_negotiated),
              room_type: name.charAt(0).toUpperCase() + name.slice(1),
              name: customerName.charAt(0).toUpperCase() + customerName.slice(1),
              phone_number: phone_number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
              availableRooms,
              _id,
            };
          });

          setBookedCustomers(formattedCustomers);
          setAvailableRooms(availableRoomsByUser);
        } else {
          throw new Error(`Failed to fetch data: ${result.message}`);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchBookedCustomers();
  }, []);

  return (
    <section className='all-booking__section'>
      <h1>All Bookings</h1>

      <Link to='/bookings/add'>
        <button className='btn'>Book a new customer {'>'}</button>
      </Link>

      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Booking from</th>
              <th>Booking to</th>
              <th>Contact no.</th>
              <th>Type of room</th>
              <th>Rate negotiated</th>
              <th>Available rooms</th>
              <th>Book room</th>
            </tr>
          </thead>
          <tbody>
            {bookedCustomers.map(customer => (
              <tr key={customer.name}>
                <td>{customer.name}</td>
                <td>{customer.booking_from}</td>
                <td>{customer.booking_to}</td>
                <td>{customer.phone_number}</td>
                <td>{customer.room_type}</td>
                <td>{customer.rate_negotiated}</td>
                <td>
                  {availableRooms[customer.name].length > 0 ?
                    availableRooms[customer.name].map((room, index) => (
                      <span key={room}>
                        {room}{index !== availableRooms[customer.name].length - 1 && ', '}
                      </span>
                    ))
                    : 'N/A'
                  }
                </td>
                <td>
                  {availableRooms[customer.name].length > 0 ?
                    <Link to={`/allocate-room/${customer._id}`}>
                      <button className='btn-light'>Allot room</button>
                    </Link>
                    : <button className='btn-light ghost-light' disabled>Not Availble</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllBookings;
