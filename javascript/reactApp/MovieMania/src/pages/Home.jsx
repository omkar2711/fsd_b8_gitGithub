import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default Home
