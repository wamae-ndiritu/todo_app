const express = require("express");
const dotenv = require("dotenv");
const { connectDatabase } = require("./config");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDatabase();
// midlewares
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
