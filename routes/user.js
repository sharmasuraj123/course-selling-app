const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", (req, res) => {});

userRouter.post("/login", (req, res) => {});

userRouter.post("/perchases", (req, res) => {});

module.exports = {
  userRouter: userRouter,
};
