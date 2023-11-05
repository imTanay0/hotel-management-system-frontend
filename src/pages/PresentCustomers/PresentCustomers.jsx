import React, { useEffect, useState } from 'react'

import './presentCustomers.css'
import { Link } from 'react-router-dom';

const PresentCustomers = () => {

  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const getResidents = async () => {
      try {
        const response = await fetch('http://13.51.157.224:8080/api/v1/user/getallresidents', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const result = await response.json();

        if (result.success) {

          result.users.forEach(item => {
            item.phone_number = item.phone_number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
          });

          setResidents(result.users);

        } else {
          throw new Error(`Failed to fetch data: ${result.message}`);
        }

      } catch (error) {
        alert(error.message);
      }
    }

    getResidents();
  }, [])

  function calculateDays(date1, date2) {
    const newDate1 = new Date(date1);
    const newDate2 = new Date(date2);

    const diffInMilliseconds = newDate2 - newDate1;
    const diffInSeconds = diffInMilliseconds / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;

    if (diffInDays < 0) {
      return (0 + ' days' )
    }

    return Math.floor(diffInDays) + ' days';
  }

  return (
    <div className='customer-section'>
      <h1>Residents of the Hotel</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Room no.</th>
              <th>Phone no.</th>
              <th>Days spent</th>
              <th>Order food</th>
              <th>Total bill</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((user) => (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.room_no.no}</td>
                <td>{user.phone_number}</td>
                <td>{calculateDays(user.date_of_check_in, new Date())}</td>
                <td>
                  <Link to={`/orderfood/${user._id}`}>
                    <button className={`btn-light ${calculateDays(user.date_of_check_in, new Date()) === 0 + ' days' ? 'ghost-light' : null}`}>
                      {`${calculateDays(user.date_of_check_in, new Date()) === 0 + ' days'
                          ? 'N/A'
                          : 'Order Now'
                      }`}
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/billing/${user._id}`}>
                    <button className='btn-light'>Check billing</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default PresentCustomers