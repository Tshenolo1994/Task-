
import { useState } from 'react';
import {nanoid} from "nanoid"
import './App.css';
import NotesList from './components/NoteList';
function App() {

  const [notes, setNotes]  = useState(
    [
      {
    id:nanoid(),
    heading:"Car repairs",
    text:"This is my first note",
    date:"15/03/21",

  },
  {
    id:nanoid(),
    heading:"Groceries",
    text:"This is my second note",
    date:"15/03/21",

  },
  {
    id:nanoid(),
    heading:"exam study",
    text:"This is my third note",
    date:"15/03/21",

  },
]);

const addNote = (heading, text) =>{

const date = new Date();
const newNote = {
  id:nanoid,

  heading: heading,
  text: text,
  date: date.toLocaleDateString,
}

const newNotes = [...notes, newNote];
setNotes(newNotes)
}
const deleteNote = (id) =>{
const newNotes = notes.filter((note) => note.id !== id)
setNotes(newNotes)
}
  
return (
    <div className="container">
      <NotesList 
      notes={notes}
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
      
    </div>
  );
}

export default App;
