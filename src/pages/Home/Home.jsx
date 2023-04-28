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
        Welcome
      </h1>

      <div>
        <button className='btn' onClick={handlePrint}>
          Print
        </button>
      </div>

    </div>
  )
}

export default Home