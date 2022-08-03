import {useState} from 'react'
const AddNote = ({handleAddNote}) =>{

    const [noteText, setNoteText]  = useState('')
    const [noteTitle, setNoteTitle]  = useState('')
 
   const charLimit = 200;
    const handleChange = (e) =>{
        if(charLimit - e.target.value.length >=0){
            setNoteText(e.target.value)
        }
    }
const titleChangeHandler = (e) =>{
    setNoteTitle(e.target.value)
}
    const handleSaveClick = () =>{

        if(noteText.trim().length > 0 || noteTitle.trim().length > 0)
        {
            
            handleAddNote({noteText,noteTitle
            })
            // handleAddNote(noteTitle)
            setNoteText('')
            setNoteTitle('')
           
        }
      
    }
    return(
        <div className="note new">
        <input 
        type="text" 
         placeholder="Tite"
         value={noteTitle}
         maxLength="30"
         onChange={titleChangeHandler}
         />
      <textarea
       name="" 
       id="" 
       cols="10"
        rows="8" 
        placeholder="Type note here"
        value={noteText}
      onChange={handleChange}

      ></textarea>
        <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save"
        onClick = {handleSaveClick}
        >Save note</button>
        </div>
        </div>
    )
}
export default AddNote