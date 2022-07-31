import React from 'react'
import {useState} from "react"
function Header
({handleLightMode}) {
  return (
    <div className='header'>
    <h1>Notes</h1>
<button className='save'
onClick={()=>handleLightMode((prevLightMode)=> ! prevLightMode)}
>Light Mode</button>
    </div>
  )
}

export default Header
