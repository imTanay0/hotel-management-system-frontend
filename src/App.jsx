import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sidebar from './components/Sidebar/Sidebar'

import Home from './pages/Home/Home'
import Booking from './pages/Booking/Booking'
import RoomAllocate from './pages/RoomAllocation/RoomAllocate'
import Food from './pages/Food/Food'
import Billing from './pages/Billing/Billing'

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
            <Route path='/booking' element={<Booking />} />
            <Route path='/room-allocation' element={<RoomAllocate />} />
            <Route path='/food' element={<Food />} />
            <Route path='/billing' element={<Billing />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
