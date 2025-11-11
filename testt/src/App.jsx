import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

   const users=[
     { "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031",
    "website": "hildegard.org"
  },
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031",
    "website": "hildegard.org"
  },  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031",
    "website": "hildegard.org"
  }
   ]
    
  
     

function App() {
  
 
  return (
    
      <div >
          <table>
            <thead>
              <th>name</th>
              <th>email</th>
            </thead>
            <tbody>
              {
                users.map((user)=>{
                  return(
                    <tr>
                      <td>
                      {user.name}</td>
                      <td>{user.email}</td>
                      </tr>
                  )
                })
              }
            </tbody>         
               </table>
      </div>
    
  )
}

export default App
