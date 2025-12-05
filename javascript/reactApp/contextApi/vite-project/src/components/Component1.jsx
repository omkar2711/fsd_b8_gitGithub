import React, {useContext} from 'react'
import {CounterContext} from '../counterContext';

const Component1 = () => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <p>Count : {count}</p>
    </div>
  )
}

export default Component1
