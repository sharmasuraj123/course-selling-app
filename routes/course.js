function createCourseRoutes(app) {
  app.get("/course/purchase", (req, res) => {});
  app.get("/course/preview", (req, res) => {});
}

module.exports = {
  createCourseRoutes: createCourseRoutes,
};
