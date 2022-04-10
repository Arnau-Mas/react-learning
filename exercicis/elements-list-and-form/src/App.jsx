import { useState } from 'react'
import './App.css'

const notes = [
  {
    id:1,
    title:"Nota 1",
    content:"lorem ipsum blabla"
  },
  {
    id:2,
    title:"Nota 2",
    content:"lorem ipsum bleble"
  },
  {
    id:3,
    title:"Nota 3",
    content:"lorem ipsum blibli"
  },
]

function App() {
  return (
    <div className="App">
      {notes.map((nota) => {
        return (
          <div>
            <h3>{nota.title}</h3>
            <p>{nota.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
