import React , { useState } from 'react'


const AddNote = ({setNotes , notes}) => {


    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');

    console.log("Title:" , title )
    console.log("Description:" , description )

    const handleAddNote = () => {
        const Note = {
            "title" : title,
            "description" : description
        }

        setNotes([...notes , Note]);
        
    }


  return (
    <div>
        <div className=' flex flex-col justify-center border rounded-2xl gap-4 w-96 mx-auto my-10 p-8 bg-[#FCF9EA]'>

            <input 
                type='text'
                id='title'
                placeholder='Enter the title of the Note...'
                className='border rounded-sm bg-white'
                onChange={(e)=>setTitle(e.target.value)}
            />
   

            <textarea 
                type='text'
                id='description'
                placeholder='Enter the description of the Note...'
                className='border rounded-sm bg-white'
                onChange={(e)=>setDescription(e.target.value)}
            />

            <button onClick={handleAddNote} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-36 mx-auto">Save Note</button>
        </div>

        
    </div>
  )
}

export default AddNote
