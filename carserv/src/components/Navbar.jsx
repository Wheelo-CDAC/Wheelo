import {Link} from 'react-router-dom'
import '../css/Navbar.css'
import MyBookings from './../pages/MyBookings';


export default function Navbar() {
  return (
    <div>
       <nav className="navbar">
      <div className="navbar-logo">CarServicePro</div>
      <ul className="navbar-links">
        <li><Link to="/User/Home">Home</Link></li>
        <li><Link to="/User/AboutUs">About Us</Link></li>
        <li><Link to="/User/MyBookings">My Bookings</Link></li>
        <li><Link to="/User/ViewServices">View Services</Link></li>
        <li><Link to="/User/Profile">Profile</Link></li>
      </ul>
      <Link to={MyBookings} className="navbar-button">Book Now</Link>
    </nav>
    </div>
  )
}
