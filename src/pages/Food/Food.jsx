import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './food.css'

const Food = () => {

  const [foodNames, setFoodNames] = useState([]);
  const [foodOrder, setFoodOrder] = useState({
    date: '',
    time: '',
    foodName: '',
    roomNo: '',
    amount: '',
  })
  const params = useParams();

  useEffect(() => {

    const getAllFoods = async () => {
      try {

        const response = await fetch('http://localhost:8080/api/v1/food/allfoods', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const data = await response.json()

        if (data.success) {
          setFoodNames(data.foods)
        }


      } catch (error) {
        alert(error.message)
      }
    }

    const getRoomNo = async () => {
      try {

        const response = await fetch(`http://localhost:8080/api/v1/user/getdetail/${params.userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })

        const data = await response.json()

        if (data.success) {
          setFoodOrder((currVal) => ({ ...currVal, roomNo: data.user.room_no.no }))
        } else {
          throw new Error(data.message)
        }

      } catch (error) {
        alert(error.message)
      }
    }

    getAllFoods();
    getRoomNo();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/v1/user/order-food/${params.userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodOrder)
      })

      const data = await response.json()

      if (data.success) {
        alert("Food ordered successfully")
      } else {
        throw new Error(data.message)
      }

    } catch (error) {
      alert(error.message);
    } finally {
      setFoodOrder({
        date: '',
        time: '',
        amount: '',
      })
    }
  }

  return (
    <div className='food-section'>
      <h1>Order Food</h1>

      <Link to='/customers'>
        <button className='btn'>{`< `} Back</button>
      </Link>

      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='date'>Date: </label>
          <input
            id='date'
            type="date"
            value={foodOrder.date}
            onChange={(e) => setFoodOrder({ ...foodOrder, date: e.target.value })}
            required
          />

          <label htmlFor='time'>Time: </label>
          <input
            id='time'
            type="time"
            value={foodOrder.time}
            onChange={(e) => setFoodOrder({ ...foodOrder, time: e.target.value })}
            required
          />

          <label htmlFor='foods'>Select food: </label>
          <select
            id="foods"
            value={foodOrder.foodName}
            onChange={(e) => setFoodOrder({ ...foodOrder, foodName: e.target.value })}
          >
            {foodNames.map((foodName) => (
              <option key={foodName.name} value={foodName.name}>{foodName.name.charAt(0).toUpperCase() + foodName.name.slice(1)}</option>
            ))}
          </select>

          <label htmlFor='roomNo'>Room No: </label>
          <input
            id='roomNo'
            type="text"
            value={foodOrder.roomNo}
            required
          />

          <label htmlFor='amount'>Amount: </label>
          <input
            id='amount'
            type="text"
            value={foodOrder.amount}
            onChange={(e) => setFoodOrder({ ...foodOrder, amount: Number(e.target.value) })}
            required
          />

          <button className='btn' type='submit'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Food