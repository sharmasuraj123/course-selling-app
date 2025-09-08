const express = require("express");
const app = express();
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

app.use("/api/v1/user", userRouter); // {/user/userRouter}
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

// createuserRoutes(app);
// createCourseRoutes(app);

app.listen(4000, () => {
  console.log("the server is listent on port 4000");
});
