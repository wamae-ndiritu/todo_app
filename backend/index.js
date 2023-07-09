const express = require("express");
const dotenv = require("dotenv");
const { connectDatabase } = require("./config");
const { todoRouter } = require("./routes/TodoRoute");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDatabase();
// midlewares
app.use(express.json());

// API CALLS
app.use("/api/todo", todoRouter);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
