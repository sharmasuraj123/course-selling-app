const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.send("1");
});

userRouter.post("/login", (req, res) => {
  res.send("11");
});

userRouter.post("/perchases", (req, res) => {
  res.send("111");
});

module.exports = {
  userRouter: userRouter,
};
