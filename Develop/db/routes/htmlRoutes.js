var path = require("path");



module.exports = function(app) {
// here is what happens when a user visits a route
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });


};
