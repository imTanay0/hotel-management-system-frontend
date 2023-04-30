import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "./App.css";

import Sidebar from './components/Sidebar/Sidebar'

import Home from './pages/Home/Home'
import AddBooking from './pages/AddBooking/AddBooking'
import AllocateNewRoom from './pages/AllocateNewRoom/AllocateNewRoom'
import Food from './pages/Food/Food'
import Billing from './pages/Billing/Billing'
import AllBookings from './pages/AllBookings/AllBookings'
import RoomTypes from './pages/RoomTypes/RoomTypes'
import Rooms from './pages/Rooms/Rooms'
import AddRoomTypes from './pages/AddRoomTypes/AddRoomTypes'
import AddRooms from './pages/AddRooms/AddRooms.jsx'
import PresentCustomers from './pages/PresentCustomers/PresentCustomers';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <div className='sidebar'>
          <Sidebar />
        </div>

        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/roomtypes' element={<RoomTypes />} />
            <Route path='/roomtypes/add' element={<AddRoomTypes />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/rooms/add' element={<AddRooms />} />
            <Route path='/bookings' element={<AllBookings />} />
            <Route path='/bookings/add' element={<AddBooking />} />
            <Route path='/allocate-room' element={<AllocateNewRoom />} />
            <Route path='/customers' element={<PresentCustomers />} />
            <Route path='/orderfood/:userId' element={<Food />} />
            <Route path='/billing/:userId' element={<Billing />} />
          </Routes>
        </main>

      </BrowserRouter>
    </div>
  );
}

export default App;
