const express = require("express");
const app = express();
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");

app.use("/user", userRouter); // {/user/userRouter}
app.use("/course", courseRouter);

// createuserRoutes(app);
// createCourseRoutes(app);

app.listen(4000, () => {
  console.log("the server is listent on port 4000");
});
