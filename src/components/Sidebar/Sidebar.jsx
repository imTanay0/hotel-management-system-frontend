import React from 'react'
import { Link } from 'react-router-dom';

import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="sidebar__logo">
        <Link to="/">
          <p>HOME</p>
        </Link>
      </div>
      <div className="sidebar__room-types">
        <p>room types</p>
      </div>
      <div className="sidebar__rooms">
        <p>rooms</p>
      </div>
      <div className="sidebar__bookings">
        <Link to="/booking"><p>Booking</p></Link>
      </div>
      <div className="sidebar__customer">
        <p>customers</p>
      </div>
      <div className="sidebar__allocate-rooms">
        <Link to="/room-allocation"><p>Allocate Room</p></Link>
      </div>
      <div className="sidebar__food">
        <Link to="/food"><p>food</p></Link>
      </div>
      <div className="sidebar__billing">
      <Link to="/billing"><p>billing</p></Link>
      </div>
    </div>
  )
}

export default Sidebar