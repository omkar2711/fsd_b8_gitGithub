import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

import MovieCard from '../components/MovieCard.jsx'

const Movies = () => {

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        
        const fetchMovie = async () => {
            const response = await fetch('https://api.tvmaze.com/shows?page=1');
            const movies = await response.json();
            setMovieData(movies);
        }
        fetchMovie();
        
    }, []);

  return (
    <div>
        <Navbar />
        <div className='flex flex-wrap justify-center h-auto mt-10 mx-40'>
            {
                movieData.map((movie)=>
                    <MovieCard key={movie.id} movie={movie} />
                )
            }

        </div>
      
    </div>
  )
}

export default Movies
