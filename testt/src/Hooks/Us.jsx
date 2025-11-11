import React from 'react'
import axios from "axios"
import { useState } from 'react';
export default function Us() {
    const [typed,settyped]=useState("");
  return (
      <div >
        <input 
        placeholder='type-something'
        onChange={(e)=>settyped(e.target.value)}
        ></input>
        <div>
          you typed :{typed}
        </div>
      </div>
  )
}
