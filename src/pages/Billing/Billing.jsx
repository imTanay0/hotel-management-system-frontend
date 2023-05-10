import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import './billing.css'

const Billing = () => {

  const [form, setForm] = useState({
    name: '',
    checkInDate: '',
    checkOutDate: '',
    GSTINno: '',
    noOfDays: '',
    roomRent: '',
    roomBill: '',
    foodBill: '',
  });
  const params = useParams();


  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/user/getbill/${params.userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await response.json();

        if (data.success) {

          data.data.checkInDate = new Date(data.data.checkInDate).toLocaleDateString();
          data.data.checkOutDate = new Date(data.data.checkOutDate).toLocaleDateString();

          data.data.roomRent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR",
          }).format(data.data.roomRent);

          data.data.roomBill = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR",
          }).format(data.data.roomBill);

          data.data.foodBill = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR",
          }).format(data.data.foodBill);

          setForm(data.data)
        } else {
          throw new Error(`Failed to fetch data: ${data.message}`)
        }

      } catch (error) {
        alert(error.message)
      }

    }

    getFormData();
  }, [])


  return (
    <div className='billing-section'>
      <h1>Billing</h1>

      <Link to='/customers'>
        <button className='btn'>{`< `} Back</button>
      </Link>

      <div className='form-container'>
        <form id='billing-section__form'>

          <div className='item-container'>
            <label htmlFor="name">Name of the customer: </label>
            <input
              id='name'
              type="text"
              readOnly={true}
              value={form.name}
            />
          </div>
          <div className='item-container'>
            <label htmlFor="name">Date of check in: </label>
            <input
              id='name'
              type="text"
              readOnly={true}
              value={form.checkInDate}
            />
          </div>
          <div className='item-container'>
            <label htmlFor="name">Date of check out: </label>
            <input
              id='name'
              type="text"
              readOnly={true}
              value={form.checkOutDate}
            />
          </div>
          <div className='item-container'>
            <label htmlFor="name">GSTIN no: </label>
            <input
              id='name'
              type="text"
              readOnly={true}
              value={form.GSTINno}
            />
          </div>
          <div className='item-container'>
            <label htmlFor="name">Days spent: </label>
            <input
              id='name'
              type="text"
              readOnly={true}
              value={form.noOfDays + ' days'}
            />
          </div>
          <div className='item-container'>
            <label htmlFor="name">Room rent: </label>
            <input
              id='name'
              type="text"
              readOnly={true}
              value={form.roomRent}
            />
          </div>
          <div className='item-container'>
            <label htmlFor="name">Room bill: </label>
            <input
              id='name'
              type="text"
              readOnly={true}
              value={form.roomBill}
            />
          </div>
          <div className='item-container'>
            <label htmlFor="name">Food bill: </label>
            <input
              id='name'
              type="text"
              readOnly={true}
              value={form.foodBill}
            />
          </div>

        </form>
      </div>

    </div>
  )
}

export default Billing