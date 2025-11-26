import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
          <div className='bg-[#222222] flex justify-center border-transparent shadow-md p-4 mx-80 mt-8 rounded-3xl  gap-8'>
            
            <button className='text-gray-100 '>
              <Link to='/'>Home</Link>
            </button>
            <button className='text-gray-100 '>
              <Link to='/movies'>Movies</Link>
            </button>
            <button className='text-gray-100 '>
              <Link to='/dashboard'>Dashboard</Link>
            </button>
            <button className='text-gray-100 '>
              <Link to='/profile'>Profile</Link>
            </button>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
