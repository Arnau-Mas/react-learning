import { useState } from "react";
import "./App.css"
import Note from './Note.jsx';

function App({notes}){
  const [allNotes, setAllNotes] = useState(notes);
  const [newNote, setNewNote] = useState({
    title:"",
    content:""
  });
  function catchNote(event){
    if(event.target.id ==="title"){
      setNewNote({
        ...newNote,
        title:event.target.value
      })
    }else{
      setNewNote({
        ...newNote,
        content:event.target.value
      })
    }
  }

  function addNote(event){
    event.preventDefault();
    if(newNote.title && newNote.content){
      setAllNotes([...allNotes, newNote]);
      setNewNote({
        title:"",
        content:""
      })
    }else{
      console.log("no data")
    }
  }
  return (
    <div className="App">
      <h1>Note taking</h1>
      {allNotes.map((note)=> {
          return(
            <Note key={note.title} title={note.title} content={note.content}/>
          )
        })
      }
      <form onSubmit={addNote} className="Form">
        <label htmlFor="title">Title</label>
        <input onChange={catchNote} type="text" name="title" id="title" value={newNote.title}/>
        <label htmlFor="content">Content</label>
        <input onChange={catchNote} type="text" name="content" id="content" value={newNote.content} />
        <button>Add note</button>
      </form>
    </div>
  )
}

export default App;