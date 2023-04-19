import React from 'react'
import { Link } from 'react-router-dom'

import './home.css'

const Home = () => {

  const handlePrint = () => {
    window.print();
  }

  return (
    <div className='home-section'>

      <h1 className='home-section-heading'>
        Welcome to The Lushai Inn
      </h1>

      <div className='home-section-content'>
        <div className='already-booked'>
          <h2>If you have already booked, check your booking details here.</h2>
          <Link to="/booking"><button>Click here</button></Link>
        </div>

        <div className='unbooked'>
          <h2>Otherwise check for available room and book here.</h2>
          <Link to="/room-allocation"><button>Book here</button></Link>
        </div>
      </div>

      <div children='print-button' style={{ marginTop: "80px" }}>
        <button
          style={{ height: "28px", width: "50px", borderRadius: "5px", cursor: "pointer" }}
          onClick={handlePrint}
        >
          Print
        </button>
      </div>

    </div>
  )
}

export default Home