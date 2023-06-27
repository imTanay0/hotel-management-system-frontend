import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './addRooms.css';

const AddRooms = () => {
  const roomNo = useRef('');
  const [customer, setCustomer] = useState({
    roomTypeName: '',
  });
  const rate = useRef('');

  const [roomTypes, setRoomTypes] = useState([]);

  useEffect(() => {
    const getAllRoomTypes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/roomtype/getall', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();

        if (result.success) {
          setRoomTypes(result.roomTypes);
        } else {
          throw new Error(`Failed to fetch room types: ${result.message}`);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    getAllRoomTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/v1/room/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomNo: roomNo.current.value,
          roomType: customer.roomTypeName,
          rate: rate.current.value,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Room Created Successfully');
      } else {
        throw new Error(`Failed to fetch: ${data.message}`);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      roomNo.current.value = '';
      setCustomer({ roomTypeName: '' });
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
          <label htmlFor='roomNo'>Enter the no. of room: </label>
          <input id='roomNo' type='text' ref={roomNo} required />

          <label htmlFor='roomType'>Enter the type of room: </label>
          <input
            list='roomTypeOptions'
            placeholder='Enter the type of room'
            required
            onChange={(e) => setCustomer({ roomTypeName: e.target.value })}
          />
          <datalist id='roomTypeOptions'>
            {roomTypes.map((roomType, idx) => (
              <option key={idx} value={roomType.room_type} />
            ))}
          </datalist>

          <label htmlFor='rate'>Enter the rate of room: </label>
          <input id='rate' type='text' ref={rate} required />

          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRooms;
