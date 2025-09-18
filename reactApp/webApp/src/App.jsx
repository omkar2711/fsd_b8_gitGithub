
import './App.css'
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';

function App() {

  const [notes, setNotes] = React.useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  }

  return (
    <>
      <AddNote onAddNote={addNote} />
      <NoteList notes={notes} />
    </>
  )
}

export default App
