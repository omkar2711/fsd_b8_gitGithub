import React from 'react'
import heroImage from '../assets/heroImage.jpg'

const HeroSection = () => {
  return (
    <div className='grid grid-cols-2  h-96 mx-40 mt-8 rounded-3xl px-8 items-center gap-8'>
      {/* left part - text */}
        <div className=' h-full  flex flex-col justify-center gap-4'>
            <h1 className='text-5xl'>This is a <strong>Movie Mania</strong> Application</h1>
            <p className='text-2xl mt-4'>Welcome to the ultimate movie experience!</p>
        </div>

      {/* right part - image */}
        <div className=' h-full'>
            <img className='w-full h-full object-cover rounded-3xl' src={heroImage} alt="Hero" />
        </div>
    </div>
  )
}

export default HeroSection
