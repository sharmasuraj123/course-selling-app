const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.send("1");
});
adminRouter.post("/login", (req, res) => {
  res.send("2");
});
adminRouter.post("/course", (req, res) => {
  res.send("3");
});
adminRouter.put("/course", (req, res) => {
  res.send("4");
});
adminRouter.get("/course/bulk", (req, res) => {
  res.send("5");
});

module.exports = {
  adminRouter: adminRouter,
};
