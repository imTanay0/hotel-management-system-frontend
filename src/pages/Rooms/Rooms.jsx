import React from 'react'

import './rooms.css';
import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <div>
      <h1>Rooms available</h1>

      <Link to='/rooms/add'>
        <button className='btn'>Add a new room {`>`}</button>
      </Link>
    </div>
  )
}

export default Rooms