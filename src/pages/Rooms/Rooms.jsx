import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './rooms.css';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getAllRooms = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/v1/room/getall', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })

        const data = await res.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        for(var i = 0; i < data.rooms.length; i++) {
          data.rooms[i].rate = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR' }).format(data.rooms[i].rate);
        }

        setRooms(data.rooms);

      } catch (error) {
        alert(error.message);
      }
    }

    getAllRooms();
  }, [])

  return (
    <div className='rooms-container'>
      <h1>Rooms available</h1>

      <Link to='/rooms/add'>
        <button className='btn'>Add a new room {`>`}</button>
      </Link>

      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Room No.</th>
              <th>Room Type</th>
              <th>Rate</th>
              <th>Booking Status</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map(room => (
              <tr key={room.roomNo}>
                <td>{room.roomNo}</td>
                <td>{room.roomType.name}</td>
                <td>{room.rate}</td>
                <td>{room.bookingStatus ? 'Booked' : 'Available'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Rooms