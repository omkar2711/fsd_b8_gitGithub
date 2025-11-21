import React , { useState } from 'react'
import './App.css'
import AddNote from './components/AddNote'
import AllNotes from './components/AllNotes'



function App() {


  const [notes, setNotes] = useState([]);


  return (

    <div className='bg-[#FCF9EA] h-full '>
      <AddNote setNotes={setNotes} notes={notes}/>
      <hr />
      <AllNotes notes={notes}/>
      </div>
  )
}

export default App

