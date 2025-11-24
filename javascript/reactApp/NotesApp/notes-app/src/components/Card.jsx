import React, { useState } from 'react'

const Card = ({ note, deleteNote, editNote }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note?.title);
    const [description, setDescription] = useState(note?.description);


    const handleSave = () => {
        editNote(note.noteId, title, description);
        setIsEditing(false);
        
    }

    return (
        <div className='rounded overflow-hidden shadow-lg w-[400px] bg-transparent bg-opacity-50 border border-gray-300 p-8'>
            <div>
                {isEditing ? (
                    <div className=''>
                        <input
                            type='text'
                            id='title'
                            value={title}
                            placeholder='Enter the title of the Note...'
                            className='border border-transparent rounded-sm bg-gray-200 w-full p-2 mb-2'
                            onChange={(e) => setTitle(e.target.value)}
                        />


                        <textarea
                            type='text'
                            id='description'
                            placeholder='Enter the description of the Note...'
                            value={description}
                            className='border  border-transparent rounded-sm w-full bg-gray-200 p-2'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                ) : (
                    <div>
                        <h2 className='font-bold text-lg mb-2'>Title : {note?.title}</h2>
                        <p className='text-gray-700 '>Description: {note?.description}</p>
                    </div>
                )
                }

            </div>

            <div className='flex  '>
                {isEditing ? (
                    <div className='flex gap-4 mx-auto mt-4'> 
                        <button onClick={()=> handleSave()} className="bg-[#e1d5e0] font-semibold py-2 px-4 border  border-transparent rounded w-36 mx-auto">Save</button>
                        <button onClick={() => setIsEditing(!isEditing)} className="bg-[#e1d5e0] font-semibold py-2 px-4 border  border-transparent rounded w-36 mx-auto">Close</button>

                    </div>
                ) :
                    <div className=' flex mt-4 gap-4 justify-end'>
                        <button onClick={() => setIsEditing(!isEditing)} className='text-white bg-green-500 box-border border border-transparent rounded hover:bg-green-600 focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'>Edit Note</button>
                        <button onClick={() => deleteNote(note.noteId)} className='text-white bg-red-500 box-border border border-transparent rounded hover:bg-red-600 focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'>Delete Note</button>
                    </div>
                }

            </div>

        </div>
    )
}

export default Card
