import React, { useState, useEffect } from "react";
import "./Todo.css";

function Todo() {
  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  // }
  return (
    <div className="cont">
      <div className="wrapper">
        <h2 className="title">Todo List</h2>
        <div className="input-cont">
          <textarea rows={4}></textarea>
          <button>Add Todo</button>
        </div>
        <div className="todo-items">
          <div className="todo-item">
            <h6>Note 1</h6>
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
          <div className="todo-item">
            <h6>We are doing some live coding</h6>
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
