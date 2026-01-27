import React, {useState , useEffect} from 'react'
import { use } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();



    // if(!localStorage.getItem('token')){
    //     navigate('/');
    //     return;
    // }


    useEffect(() => {
        if(!localStorage.getItem('token')){
            // navigate('/');
            navigate('/login');
            return;
        }
    }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
