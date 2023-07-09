import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Todo.css";
import { useGlobalContext } from "../context";

function Todo() {
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const { success, items, getItemsSuccess, addItemSuccess } =
    useGlobalContext();

  const handleChange = (e) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setIsError(false);
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/todo/item", notes)
      .then(({ data }) => {
        console.log(data);
        addItemSuccess();
      })
      .catch((err) => {
        setIsError(true);
        setError(err.response ? err.response.data.message : err.message);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/todo/items").then(({ data }) => {
      console.log(data);
      getItemsSuccess(data);
    });
  }, [success]);

  console.log(items);
  return (
    <div className="cont">
      <div className="wrapper">
        <h2 className="title">Todo List</h2>
        {isError && (
          <div className="alert alert-danger text-center alert-message">
            {error}
          </div>
        )}
        <div className="input-cont">
          <h5>Note Title</h5>
          <input type="text" name="title" onChange={handleChange} />
          <h5>Note Description</h5>
          <textarea
            rows={3}
            name="description"
            onChange={handleChange}
          ></textarea>
          <button onClick={handleSubmit}>Add Todo</button>
        </div>
        <div className="todo-items">
          {items.map((item) => {
            const { _id, title, description } = item;
            return (
              <div className="todo-item" key={_id}>
                <div>
                  <h6>{title}</h6>
                  <p>{description}</p>
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
