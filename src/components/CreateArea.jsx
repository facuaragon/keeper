import React, {useState} from "react";

function CreateArea({onAdd}) {

    const [note, setNote]=useState({
        title:"",
        content:""
    })
    const handleChange =(event)=>{
        const {name, value}= event.target
        setNote({
            ...note,
            [name]: value
        })
    }
    const submitNote = (event)=>{
        event.preventDefault();
        if(note.title!=="" && note.content!==""){
            onAdd(note)
            setNote({
                title:"",
                content:""
            })
        }
    }
  return (
    <div>
      <form className="create-note">
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
