import React, { useContext } from 'react'
import { CounterContext } from '../counterContext';

const CounterButtons = () => {


    const { count, setCount } = useContext(CounterContext);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    
    const reset = () => {
        setCount(0);
    }

  return (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterButtons
