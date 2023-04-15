import React from 'react'
import { Link } from 'react-router-dom'

import './food.css'

const Food = () => {
  return (
    <div className='food-section'>
      <h1>Food</h1>

      <Link to="/">
        <button>Go To Home Page</button>
      </Link>

      <div className='food-section-form'>
        <form>
          <label>Date: <input type="date" /></label>

          <br />
          <br />
          
          <label>Time: <input type="time" /></label>

          <br />
          <br />

          <label>Room no: <input type="text" /></label>

          <br />
          <br />

          <label>Item Ordered: (From a dropdown menu)</label>
          
          <br />
          <br />
          
          <label>Room No: <input type="text" /></label>

          <br />
          <br />

          <label>Amount: <input type="text" /></label>

          <br />
          <br />

          <button>Submit</button>
          
        </form>
      </div>

      <Link to="/billing"><button>Go To Food Page</button></Link>

    </div>
  )
}

export default Food