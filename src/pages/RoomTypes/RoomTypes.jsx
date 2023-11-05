import React, { useEffect, useState } from 'react'

import './roomTypes.css'
import { Link } from 'react-router-dom';

const RoomTypes = () => {

  const [typesOfRoom, setTypesOfRoom] = useState([])

  useEffect(() => {
    const getTypesOfRooms = async () => {

      try {

        const res = await fetch('http://13.51.157.224:8080/api/v1/roomtype/getall', {
          method: 'GET',
          headers: {
            'Content-Type': "appllication/json",
          }
        })

        if (!res.ok) {
          return alert(res.message);
        }

        const result = await res.json();

        const data = result.roomTypes;

        setTypesOfRoom(data);

      } catch (error) {
        alert(error.message)
      }

    }

    getTypesOfRooms();
  }, [])


  return (
    <div className='roomtype-section'>

      <h1>Types of Rooms available</h1>

      <Link to='/roomtypes/add'>
        <button className='btn'>Add Room Type {`>`}</button>
      </Link>

      <div className="table-container" id='roomtype-section__table-container'>
        <table>
          <thead>
            <tr>
              <th>Types</th>
              <th>Rooms</th>
            </tr>
          </thead>

          <tbody>
            {typesOfRoom.map((item) => (
              <tr key={item.room_type}>
                <td>{item.room_type}</td>
                <td>
                  {
                    item.room_no.length
                      ? item.room_no.map((roomNo) => (
                        roomNo.no
                      )).join(", ")
                      : "No room available for this room type"
                  }
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default RoomTypes