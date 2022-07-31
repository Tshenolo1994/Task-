import Notes from "./Notes"
import AddNote from "./AddNote";
const NotesList = ({notes, handleAddNote, handleDeleteNote}) =>{
    return(
        <div className="notes-list">
           {notes.map((note) => <Notes 
           id={note.id}
           heading={note.heading}
           text={note.text}
           date={note.date}
           handleDeleteNote =  {handleDeleteNote}
           />)}
           <AddNote
           handleAddNote={handleAddNote} />
        </div>
    )
}
export default NotesList;