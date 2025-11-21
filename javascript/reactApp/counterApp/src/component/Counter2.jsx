import React from 'react'

const Counter2 = ({c2 ,customAddCount, setCustomVal}) => {
  return (
    <div>
      <h2 className="text-5xl" >This is Counter2 Component</h2>
        <p>Count : {c2}</p>
         <input 
            type='number'
            onChange={(e)=>{setCustomVal(Number(e.target.value))}}
        />
         

    </div>
  )
}

export default Counter2
