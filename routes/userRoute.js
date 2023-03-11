const express = require("express");
const { login } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/users", (req, res) => {
  res.send("working");
});
userRouter.post("/login", login);
module.exports=userRouter;