function createuserRoutes(app) {
  pp.post("/user/signup", (req, res) => {});

  app.post("/user/login", (req, res) => {});

  app.post("/user/perchases", (req, res) => {});
}

module.exports = {
  createuserRoutes: createuserRoutes,
};
