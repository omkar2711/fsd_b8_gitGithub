import React from 'react'
import { useParams , useNavigate } from 'react-router-dom'

const User = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    const handleClick = () => {
        navigate('/dashboard/profile');
    }
  return (
    <div>
        <h1>UserID : {id}</h1>
        <button onClick={handleClick}>Login</button>

    </div>
  )
}

export default User
