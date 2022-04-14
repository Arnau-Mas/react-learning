import { useEffect, useState } from 'react'
import './App.css'
import Note from './Note'

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <div className="App">
      {notes.map(note => <Note key={note.id} title={note.name} body={note.username} />)}
    </div>
  )
}

export default App

