import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/aboutus'> About US</Link>
        <NavLink to='/aboutus' className=''>About US</NavLink>
    </div>
  )
}

export default Navbar
