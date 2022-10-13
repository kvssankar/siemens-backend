//initialise the express framework
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

const connect = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port 8000");
});
