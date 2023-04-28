import React from 'react'
import { Link } from 'react-router-dom'

import './food.css'

const Food = () => {
  return (
    <div className='food-section'>
      <h1>Food</h1>

      <Link to="/">
        <button className='btn'>Go To Home Page</button>
      </Link>

      <div className='form-container'>
        <form>
          <label>Date: <input type="date" /></label>

          <label>Time: <input type="time" /></label>

          <label>Room no: <input type="text" /></label>

          {/* <label>Item Ordered: (From a dropdown menu)</label> */}

          <label>Room No: <input type="text" /></label>

          <label>Amount: <input type="text" /></label>

          <button className='btn' type='submit'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Food