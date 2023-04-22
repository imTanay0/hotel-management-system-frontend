import { React, useState } from 'react'
import { Link } from 'react-router-dom'

import './allocateNewRoom.css'

const AllocateNewRoom = () => {

  const [userInfo, setUserInfo] = useState({
    name: '',
    phone_number: '',
    address: '',
    room_no: '',
    local_contact_number: '',
    date_of_check_in: '',
    company_name: '',
    // rate_negotiated: ''
    GSTIN_no: '',
  })

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInfo) {
      alert('Please fill the form');
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/api/v1/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      const response = await res.json();

      // Printing the reponse in the Console
      // console.log(response)

      if (response.success) {
        alert("Customer Booked successfully")
      } else {
        throw new Error(`Failed to submit form: ${response.message}`);
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }

    // Empty the form inputs after Submit 
    setUserInfo({
      name: '',
      phone_number: '',
      address: '',
      room_no: '',
      local_contact_number: '',
      date_of_check_in: '',
      company_name: '',
      // rate_negotiated: ''
      GSTIN_no: '',
    });
  };



  return (
    <div className='room-allocate-section'>
      <h1>Allocate a Room to a Customer</h1>

      <div id='previous-page-btn'>
        <Link to="/">
          <button className='btn'>Go To Home Page</button>
        </Link>
      </div>

      <div className='room-allocate-section-form'>
        <form onSubmit={handleSubmit}>

          {/* <div> */}
          {/* <label htmlFor='user-name'>Name of the Customer: </label> */}
          <input
            id='user-name'
            type="text"
            name='name'
            value={userInfo.name}
            onChange={handleChange}
            placeholder='Enter name of the Customer'
            autoComplete='false'
          />
          {/* </div> */}

          {/* <br />
          <br /> */}

          {/* // TODO: Add Upload Photo Feature }
          {/* <label htmlFor='user-photo'>Photo Identity: </label>
          <input
            id='user-photo'
            type="text"
            // name='photoId'
            onChange={handleChange}
          />

          <br />
          <br /> */}

          {/* <div> */}
          <label htmlFor='user-phoneNo'>Phone no: </label>
          <input
            id='user-phoneNo'
            type="text"
            name='phone_number'
            value={userInfo.phone_number}
            onChange={handleChange}
          />
          {/* </div> */}

          {/* <br />
          <br /> */}

          <label htmlFor='user-address'>Address: </label>
          <input
            id='user-address'
            type="text"
            name='address'
            value={userInfo.address}
            onChange={handleChange}
          />
          {/* <br />
          <br /> */}

          <label htmlFor='user-roomNo'>Room No: </label>
          <input
            id='user-roomNo'
            type="text"
            name='room_no'
            value={userInfo.room_no}
            onChange={handleChange}
          />

          {/* <br />
          <br /> */}

          <label htmlFor='user-localNo'>Local Contact No: </label>
          <input
            id='user-localNo'
            type="text"
            name='local_contact_number'
            value={userInfo.local_contact_number}
            onChange={handleChange}
          />

          {/* <br />
          <br /> */}

          <label htmlFor='user-date_of_check_in'>Date of Check in: </label>
          <input
            id='user-date_of_check_in'
            type="date"
            name='date_of_check_in'
            value={userInfo.date_of_check_in}
            onChange={handleChange}
          />

          {/* <br />
          <br /> */}

          <label htmlFor='user-company_name'>Company Name: </label>
          <input
            id='user-company_name'
            type="text"
            name='company_name'
            value={userInfo.company_name}
            onChange={handleChange}
          />

          {/* <br />
          <br /> */}

          <label htmlFor='user-GSTIN'>GSTIN No: </label>
          <input
            id='user-GSTIN'
            type="text"
            name='GSTIN_no'
            value={userInfo.GSTIN_no}
            onChange={handleChange}
          />

          {/* <br />
          <br /> */}

          <div id="form-submit-btn">
            <button className='btn' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AllocateNewRoom