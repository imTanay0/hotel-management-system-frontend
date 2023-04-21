import React from 'react'
import { Link } from 'react-router-dom';

import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <Link to="/">
        <div className="sidebar__logo">
          <p>HOME</p>
        </div>
      </Link>

      <div className="sidebar__room-types">
        <p>Room types</p>
      </div>
      
      <div className="sidebar__rooms">
        <p>Rooms</p>
      </div>
      
      <Link to="/bookings">
        <div className="sidebar__bookings">
          <p>Bookings</p>
        </div>
      </Link>

      <div className="sidebar__customer">
        <p>Customers</p>
      </div>

      <Link to="/allocate-room">
        <div className="sidebar__allocate-rooms">
          <p>Allocate Room</p>
        </div>
      </Link>

      <Link to="/food">
        <div className="sidebar__food">
          <p>Food</p>
        </div>
      </Link>

      <Link to="/billing">
        <div className="sidebar__billing">
          <p>Billing</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar