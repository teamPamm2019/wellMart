import React from "react";
import "./Note.css";
// import API from "../../utils/API";

const Note = props => {
  return (
    <div className={props.show ? "modal display-block" : "modal display-none"}>
      {/* {console.log(props)} */}
      <section className="modal-main">
        //! props.title only pulls title of last entry on page
        <h5 id="noteTitle" className="center-align">
          {props.title}
        </h5>
        <input id="titleInput" name="title" placeholder="Note Title" />
        <textarea id="bodyInput" name="body"></textarea>
        {props.children}
      </section>
    </div>
  );
};

export default Note;
