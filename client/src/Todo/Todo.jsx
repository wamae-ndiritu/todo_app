import React, { useState, useEffect } from "react";
import "./Todo.css";

function Todo() {
  const [notes, setNotes] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };

  console.log(notes);
  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  // }
  return (
    <div className="cont">
      <div className="wrapper">
        <h2 className="title">Todo List</h2>
        <div className="input-cont">
          <h5>Note Title</h5>
          <input type="text" name="title" onChange={handleChange} />
          <h5>Note Description</h5>
          <textarea
            rows={3}
            name="description"
            onChange={handleChange}
          ></textarea>
          <button>Add Todo</button>
        </div>
        <div className="todo-items">
          <div className="todo-item">
            <div>
              <h6>Live Coding session</h6>
              <p>We are having a live coding session.</p>
            </div>
            <div className="actions">
              <div className="action">
                <i className="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div className="action">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </div>
              <div className="action">
                <i className="fa fa-trash" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
