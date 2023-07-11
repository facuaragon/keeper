import React from "react";

function Note(){
    const year = new Date().getFullYear()
    return(
        <div className="note">
            <h1>h1 Title</h1>
            <p>paragraph</p>
        </div>
    )
}
export default Note;