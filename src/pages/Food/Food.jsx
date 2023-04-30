import React from 'react'
import { Link, useParams } from 'react-router-dom'

import './food.css'

const Food = () => {

  const params = useParams();

  // console.log(params.userId);

  return (
    <div className='food-section'>
      <h1>Order Food</h1>

      <div className='form-container'>
        <form>
          <label htmlFor='date'>Date: </label>
          <input id='date' type="date" />

          <label htmlFor='time'>Time: </label>
          <input id='time' type="time" />

          <label htmlFor='foods'>Select food: </label>
          <select id="foods">
            <option value="Food 1">Food 1</option>
            <option value="Food 2">Food 2</option>
          </select>

          <label htmlFor='roomNo'>Room No: </label>
          <input id='roomNo' type="text" />

          <label htmlFor='amount'>Amount: </label>
          <input id='amount' type="text" />

          <button className='btn' type='submit'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Food