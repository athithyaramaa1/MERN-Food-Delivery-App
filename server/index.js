const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoDB = require("./db");
const cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Server");
});

mongoDB();
app.use(express.json());
app.use("/api", require("./routes/CreateUsers"));

app.listen(3000, () => {
  console.log("Listening to port 3000!");
});
