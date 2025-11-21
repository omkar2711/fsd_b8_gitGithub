import { useState } from 'react';
import Counter1 from './component/Counter1';
import Counter2 from './component/Counter2';

function App() {

  const [count , setCount] = useState(0);
  const [customVal , setCustomVal] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }

  const resetCount = () => {
    setCount(0);
  }

  const customAddCount = () => {
    setCount(count + customVal)
  }


  return (
    <>
      <h1>Count : {count}</h1>
      <div className='flex gap-4'>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={incrementCount}> Increment</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrementCount}> Decrement</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={resetCount}> Reset</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={customAddCount}> Custom Add</button>
     
      </div>
     
     

      <Counter1 c1={count}/>
      <Counter2 c2={count} customAddCount={customAddCount} setCustomVal={setCustomVal}/>
    </>
  )
}

export default App
