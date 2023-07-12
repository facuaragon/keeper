import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [notes, setNotes]=useState([])
    const addNote = (note)=>{
        setNotes([...notes, note])
    }
    const deleteNote =(id)=>{
        setNotes( notes.filter((note, index)=>{
            return index !== id
        }))
    }
    return(
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}
            />
            {notes.map((note, index) => (
                <Note 
                    key={index}
                    id={index}
                    title={note.title} 
                    content={note.content} 
                    onDelete={deleteNote}
                />
            ))}
            <Footer />
        </div>
    )
}
export default App;