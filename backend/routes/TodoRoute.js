const express = require("express");
const { Todo } = require("../models/TodoModel");

const todoRouter = express.Router();

// ADD TODO
todoRouter.post("/item", async (req, res) => {
  const { title, description } = req.body;
  const existingItem = await Todo.findOne({ title });
  if (existingItem) {
    res.status(400).json({ message: "Note already exist!" });
  } else {
    const newItem = await new Todo({
      title,
      description,
    });
    if (newItem) {
      const result = await newItem.save();
      res.json(result);
    } else {
      res.status(400).json({ message: "Invalid data!" });
    }
  }
});

// Get Items
todoRouter.get("/items", async (req, res) => {
  const items = await Todo.find({});
  res.status(200).json(items);
});

// Get Item
todoRouter.get("/items/:id", async (req, res) => {
  const itemId = req.params.id;
  const item = await Todo.findById(itemId);
  res.status(200).json(item);
});

// Edit Item
todoRouter.put("/items/:id/edit", async (req, res) => {
  const itemId = req.params.id;
  const { title, description } = req.body;

  const item = await Todo.findById(itemId);
  (item.title = title || item.title),
    (item.description = description || item.description);

  await item.save();
  res.status(200).json(item);
});

// Delete item
todoRouter.delete("/items/:id/delete", async (req, res) => {
  const itemId = req.params.id;
  await Todo.deleteOne({ _id: itemId });
  res.status(200).json({ message: "Item deleted!" });
});

module.exports = { todoRouter };
