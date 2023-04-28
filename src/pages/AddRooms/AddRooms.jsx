import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

import './addRooms.css';

const AddRooms = () => {

  const roomNo = useRef('')
  const roomType = useRef('')
  const rate = useRef('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/v1/room/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          roomNo: roomNo.current.value,
          roomType: roomType.current.value,
          rate: rate.current.value,
        })
      })

      const data = await response.json();

      if (data.success) {
        alert('Room Created Successfully')
      } else {
        throw new Error(`Failed to fetch: ${data.message}`)
      }
    }
    catch (error) {
      alert(error.message);
    } finally {
      roomNo.current.value = '';
      roomType.current.value = '';
      rate.current.value = '';
    }
  };


  return (
    <div className='addroom-section'>
      <h1>Add new Rooms</h1>

      <Link to='/rooms'>
        <button className='btn'>{`< `} Back</button>
      </Link>

      <div className='form-container'>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <label htmlFor="roomNo">Enter the no. of room: </label>
          <input id='roomNo' type="text" ref={roomNo} required />

          <label htmlFor="roomType">Enter the type of room: </label>
          <input id='roomType' type="text" ref={roomType} required />

          <label htmlFor="rate">Enter the rate of room: </label>
          <input id='rate' type="text" ref={rate} required />

          <button className='btn' type="submit">Submit</button>

        </form>
      </div>

    </div>
  )
}

export default AddRooms