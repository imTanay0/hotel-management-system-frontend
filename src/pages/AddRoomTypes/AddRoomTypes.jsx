import React, { useRef } from 'react'

import './addRoomTypes.css'
import { Link } from 'react-router-dom';

const AddRoomTypes = () => {

  const typeName = useRef('')

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch('http://13.51.157.224:8080/api/v1/roomtype/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomType: typeName.current.value,
        })
      })

      const data = await response.json();

      if (data.success) {
        alert("Customer Booked successfully")
      } else {
        throw new Error(`Failed to submit form: ${data.message}`);
      }

    } catch (error) {
      alert(error.message);
    } finally {
      typeName.current.value = '';
    }
  }

  return (
    <div className='addroomtypes-section'>
      <h1>Add a Room Type</h1>

      <Link to='/roomtypes'>
        <button className='btn'>{`< `} Back</button>
      </Link>

      <main className='form-container'>
        <form onSubmit={submitHandler}>
          <label htmlFor="typeName">Enter type of the room: </label>
          <input id='typeName' type="text" ref={typeName} required autoComplete='off'/>
          <button className='btn' type="submit">Submit</button>
        </form>
      </main>
    </div>
  )
}

export default AddRoomTypes