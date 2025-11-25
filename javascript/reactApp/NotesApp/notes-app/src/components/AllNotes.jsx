import React from 'react'
import Card from './Card'

const AllNotes = ({notes, setNotes}) => {

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.noteId !== id));
    }

    const editNote = (id , title, description) => {


        setNotes(notes.map(note => {
            if(note.noteId === id){
                return {
                    ...note,
                    title: title,
                    description: description
                }
            }
            return note;
        }))
    }

    console.log(notes);

  return (
    <div className='flex flex-wrap gap-8 justify-center mt-8 p-8'>
     {notes.map((note)=>{
            return(
                <Card note={note} deleteNote={deleteNote} editNote={editNote} />
            )
      })}
    </div>
  )
}

export default AllNotes
