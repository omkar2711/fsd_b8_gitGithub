import React from 'react'
import { useSelector } from 'react-redux';

const Counter2 = () => {
      const count = useSelector((state)=> state.counter.value);
  return (
    <div>
      <h1>Counter 2 Component</h1>
      <p>Count : {count} </p>
    </div>
  )
}

export default Counter2
