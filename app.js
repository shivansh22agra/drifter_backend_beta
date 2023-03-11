const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.get("/", (req, res) => {
  res.send("working");
});
mongoose
  .connect(
    "mongodb+srv://drifter_beta:thatswhatshesaid@cluster.gl8soac.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("server started");
    });
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
