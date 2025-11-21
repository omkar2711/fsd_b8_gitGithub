import React from 'react'

const Card = ({note}) => {
  return (
    <div className='rounded overflow-hidden shadow-lg w-[400px] bg-white'>
      <h2>{note?.title}</h2>
      <p>{note?.description}</p>
    </div>
  )
}

export default Card
