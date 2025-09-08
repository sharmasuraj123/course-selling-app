const express = require("express");
const app = express();
const { createuserRoutes } = require("./routes/user");
const { createCourseRoutes } = require("./routes/course");

createuserRoutes(app);
createCourseRoutes(app);

app.listen(4000, () => {
  console.log("the server is listent on port 4000");
});
