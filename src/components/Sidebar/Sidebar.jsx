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

      <Link to="/roomtypes">
        <div className="sidebar__room-types">
          <p>Room types</p>
        </div>
      </Link>

      <Link to="/rooms">
        <div className="sidebar__rooms">
          <p>Rooms</p>
        </div>
      </Link>

      <Link to="/bookings">
        <div className="sidebar__bookings">
          <p>Bookings</p>
        </div>
      </Link>

      <Link to="/allocate-room">
        <div className="sidebar__allocate-rooms">
          <p>Allocate new room</p>
        </div>
      </Link>

      <Link to="/customers">
        <div className="sidebar__customer">
          <p>Customers</p>
        </div>
      </Link>

      {/* <Link to="/orderfood/:userId">
        <div className="sidebar__food">
          <p>Order food</p>
        </div>
      </Link> */}

      <Link to="/billing">
        <div className="sidebar__billing">
          <p>Check billing</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar