import React from 'react'

import './billing.css'

const Billing = () => {
  return (
    <div className='billing-section'>
      <h1>Billing</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date Of check in</th>
              <th>Date Of check out</th>
              <th>GSTIN no</th>
              <th>Days spent</th>
              <th>Room rent</th>
              <th>Room bill</th>
              <th>Food bill</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>12/09/2023</td>
              <td>22/10/2023</td>
              <td>gstin</td>
              <td>7 days</td>
              <td>6000</td>
              <td>10000</td>
              <td>1200</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>12/09/2023</td>
              <td>22/10/2023</td>
              <td>gstin</td>
              <td>7 days</td>
              <td>6000</td>
              <td>10000</td>
              <td>1200</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Billing