import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const About = () => {
   
  return (
    <div>
      Welcome to About Page

      <nav>
        <Link to="new">New</Link>
        <br />
        <Link to="feature">Feature</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default About
