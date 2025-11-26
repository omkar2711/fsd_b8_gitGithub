import React from 'react'

const MovieCard = ({ key , movie }) => {
  return (
    <div className='border-transparent h-auto p-4 m-4 rounded-lg shadow-md w-64 hover:shadow-xl hover:border-gray-300 transition-all duration-300'>
        <img src={movie.image.medium} alt={movie.name} className='w-full h-64 object-cover rounded-md mb-4'/>
      <h1>Title : {movie.name}</h1>
      {/* <p>Description : {movie.summary}</p> */}
      <p>Rating : {movie.rating.average}</p>
      <p>Genre : {movie.genres.join(', ')}</p>
    </div>
  )
}

export default MovieCard
