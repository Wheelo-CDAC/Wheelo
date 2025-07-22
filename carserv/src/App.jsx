import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import MyBookings from './pages/MyBookings';
import ViewServices from './pages/ViewServices';
import AboutUs from './pages/AboutUs';
import BookingStatus from './pages/BookingStatus';
import Invoice from './pages/Invoice';
import User from './pages/User';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/User' element={<User/>}>
          <Route path='home' element={<Home />} />
          <Route path='mybookings' element={<MyBookings />} />
          <Route path='viewservices' element={<ViewServices />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='bookingstatus' element={<BookingStatus />} />
          <Route path='invoice' element={<Invoice/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
