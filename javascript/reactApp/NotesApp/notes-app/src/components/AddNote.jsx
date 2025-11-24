import React , { useState } from 'react'


const AddNote = ({setNotes , notes}) => {


    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');


    const handleAddNote = () => {

        if(title ==='' || description === ''){
            alert("Please fill in both the title and description fields.");
            return;
        }
        const Note = {
            "noteId" : Date.now(),
            "title" : title,
            "description" : description
        }


        setNotes([...notes , Note]);

        setTitle("");
        setDescription("");
        
    }


  return (
    <div>
        <div className=' flex flex-col justify-center rounded overflow-hidden shadow-lg gap-4 w-96 mx-auto my-10 p-8 bg-transparent bg-opacity-50 border border-gray-300'>

            <input 
                type='text'
                id='title'
                value={title}
                placeholder='Enter the title of the Note...'
                className='border border-transparent rounded-sm bg-white p-2'
                onChange={(e)=>setTitle(e.target.value)}
            />
   

            <textarea 
                type='text'
                id='description'
                placeholder='Enter the description of the Note...'
                value={description}
                className='border  border-transparent rounded-sm bg-white p-2'
                onChange={(e)=>setDescription(e.target.value)}
            />

            <button onClick={handleAddNote} className="bg-[#e1d5e0] font-semibold py-2 px-4 border  border-transparent rounded w-36 mx-auto">Save Note</button>
        </div>

        
    </div>
  )
}

export default AddNote
