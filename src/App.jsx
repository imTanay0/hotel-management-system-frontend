import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sidebar from './components/Sidebar/Sidebar'

import Home from './pages/Home/Home'
import AddBooking from './pages/AddBooking/AddBooking'
import AllocateNewRoom from './pages/AllocateNewRoom/AllocateNewRoom'
import Food from './pages/Food/Food'
import Billing from './pages/Billing/Billing'
import AllBookings from './pages/AllBookings/AllBookings'

import "./App.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <div className='sidebar'>
          <Sidebar />
        </div>

        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/bookings' element={<AllBookings />} />
            <Route path='/bookings/add' element={<AddBooking />} />
            <Route path='/allocate-room' element={<AllocateNewRoom />} />
            <Route path='/food' element={<Food />} />
            <Route path='/billing' element={<Billing />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
