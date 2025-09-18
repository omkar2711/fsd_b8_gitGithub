import React from 'react'
//Component for adding a note

const AddNote = () => {

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const handleAddNote = (e) => {
        e.preventDefault();
        // Logic to add note will go here
    }

  return (
    <div>
        <h1>This is Add Note Component</h1>
        <form onSubmit={handleAddNote}>
            <input type="text" placeholder='Title' />
            <textarea placeholder='Note Content'></textarea>
            <button type='submit'>Add Note</button>
        </form>
    </div>
  )
}

export default AddNote
