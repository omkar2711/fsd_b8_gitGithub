import React , { useState } from 'react'
import './App.css'
import AddNote from './components/AddNote'
import AllNotes from './components/AllNotes'



function App() {


  const [notes, setNotes] = useState([]);


  return (

    <div className='h-full '>
        <AddNote setNotes={setNotes} notes={notes}/>

        {notes.length === 0 && (
          <p className='text-center text-gray-500'>No notes available. Please add a note.</p>
        )}

        <AllNotes notes={notes} setNotes={setNotes}/>
      </div>
  )
}

export default App

