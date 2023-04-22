import React from 'react'
import { Link } from 'react-router-dom'

import './billing.css'

const Billing = () => {
  return (
    <div className='billing-section'>
      <h1>Billing</h1>

      <div className='billing-section-form'>
        <form>
          <label>Name of the Customer: <input type="text" /></label>

          <br />
          <br />

          <label>Photo Identity: <input type="text" /></label>

          <br />
          <br />

          <label>Phone no: <input type="text" /></label>

          <br />
          <br />

          <label>Address: <input type="text" /></label>

          <br />
          <br />

          <label>Room No: <input type="text" /></label>

          <br />
          <br />

          <label>Local Contact No: <input type="text" /></label>

          <br />
          <br />

          <label>Date of Check in: <input type="date" /></label>

          <br />
          <br />

          <label>Company Name: <input type="text" /></label>

          <br />
          <br />

          <label>GSTIN No: <input type="text" /></label>

          <br />
          <br />

          <button className='btn' type='submit'>Submit</button>

        </form>
      </div>

      <div className='billling-submit'>
        <Link to="/">
          <button className='btn'>Reaturn to home page</button>
        </Link>
      </div>

    </div>
  )
}

export default Billing