import React from 'react'
import Card from './Card'

const AllNotes = ({notes}) => {

  return (
    <div className='flex flex-wrap gap-8 justify-center mt-8 p-8'>
     {notes.map((note)=>{
        return(
            <Card note={note}/>
        )
      })}
    </div>
  )
}

export default AllNotes
