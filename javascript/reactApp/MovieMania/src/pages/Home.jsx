import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <h1>Home Page</h1>
      <Link to='/dashboard'>Dashboard</Link>
    </div>
  )
}

export default Home
