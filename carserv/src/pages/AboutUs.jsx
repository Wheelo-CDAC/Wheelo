import React from 'react'
import '../css/AboutUs.css'
import { Link } from 'react-router-dom'
export default function AboutUs() {
  return (
    <div className='about'>

      {/* <h1>AboutUs</h1> */}

      <div className=''>
        {/* <div></div> */}
        {/* <h4>Certified Mechanics</h4> */}
        <section class="about-us">
    <div class="container">
      <h1>About Us</h1>
      <p class="tagline">Your Car’s Best Companion, On and Off the Road</p>

      <div class="section">
        <h2>Who We Are</h2>
        <p>Welcome to <strong>CarServicePro</strong>, your trusted partner in modern, hassle-free car servicing. We are a team of automobile engineers, service professionals, and technology experts, working together to make car maintenance seamless and stress-free.</p>
      </div>

      <div class="section">
        <h2>What We Offer</h2>
        <ul>
          <li>General Car Servicing</li>
          <li>AC Repairs & Top-Ups</li>
          <li>Battery Replacement</li>
          <li>Brake & Suspension Work</li>
          <li>Engine Diagnostics</li>
          <li>Car Spa & Detailing</li>
          <li>Emergency Roadside Assistance</li>
        </ul>
      </div>

      <div class="section">
        <h2>Our Values</h2>
        <p><strong>Transparency:</strong> No hidden fees or surprise charges.</p>
        <p><strong>Quality:</strong> OEM-approved spares and skilled professionals.</p>
        <p><strong>Trust:</strong> Certified and background-verified technicians.</p>
        <p><strong>Customer First:</strong> 24/7 support and real-time service tracking.</p>
      </div>

      <div class="section">
        <h2>Our Mission & Vision</h2>
        <p><strong>Mission:</strong> To revolutionize vehicle maintenance with smart, accessible, and transparent car care.</p>
        <p><strong>Vision:</strong> To be the most trusted online car service platform with customer-first service delivery.</p>
      </div>

      <div class="section">
        <h2>Why Thousands Trust Us</h2>
        <ul>
          <li>Digital Convenience</li>
          <li>Affordable Pricing</li>
          <li>Doorstep Service</li>
          <li>Skilled Professionals</li>
          <li>Service Warranty</li>
        </ul>
      </div>

      <div class="section call-to-action">
        <p>Join thousands of happy customers. Experience the future of car servicing with <strong>CarServicePro</strong>.</p>
        <Link to="/User/ViewServices" class="btn btn-primary">Book a Service</Link>
      </div>
    </div>
  </section>
      </div>

    </div>
  )
}
