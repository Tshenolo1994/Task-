import React from 'react'
import {MdDeleteForever} from "react-icons/md"


function Notes({
  id, heading,text,date, handleDeleteNote}) {
  return (
    <div className='note'>
   <h3>{heading}</h3>
        <span>{text}</span>
        <div className='note-footer'>
<small>{date}</small>
<MdDeleteForever


onClick= {
 () => handleDeleteNote(id)
}
className='delete-icon'
size="1.3em"

/>
        </div>
    
    </div>
  )
}

export default Notes