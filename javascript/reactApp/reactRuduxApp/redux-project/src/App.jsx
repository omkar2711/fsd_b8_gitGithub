import './App.css'
import Counter1 from './components/Counter1.jsx'
import Counter2 from './components/Counter2.jsx'
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement , reset, incByValue } from './features/counter/counterSlice.js'

console.log("increment: " , increment);

function App() {

  const count = useSelector((state)=> state.counter.value);
  console.log("2.value = " , count);
  const dispatch = useDispatch();

  return (
    <>
      <Counter1 count={count}/>
      <Counter2 count={count}/>

      <p>Count : {count} </p>

      <button onClick={()=> dispatch(increment())}> Increment</button>
      <button onClick={()=> dispatch(decrement())}> Decrement</button>
      <button onClick={()=> dispatch(reset())}> Reset </button>
      <button onClick={()=> dispatch(incByValue())}> Increment by 5 </button>
    </>
  )
}

export default App
