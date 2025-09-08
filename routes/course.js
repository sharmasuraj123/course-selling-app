const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/purchase", (req, res) => {
  res.send("I");
});
courseRouter.get("/preview", (req, res) => {
  res.send("II");
});

module.exports = {
  courseRouter: courseRouter,
};
