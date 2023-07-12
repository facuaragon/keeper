import React from "react";

function Note({id, onDelete, title, content}) {
    const handleClick = ()=>{
        onDelete(id)
    }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;