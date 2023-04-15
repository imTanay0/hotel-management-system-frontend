import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home/Home'
import Booking from './components/Booking/Booking'
import RoomAllocate from './components/RoomAllocation/RoomAllocate'
import Food from './components/Food/Food'
import Billing from './components/Billing/Billing'

import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/room-allocation' element={<RoomAllocate />} />
          <Route path='/food' element={<Food />} />
          <Route path='/billing' element={<Billing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
