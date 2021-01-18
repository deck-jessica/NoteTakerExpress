var fs = require("fs");
var notesData = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {
    // API GET Request
    app.get("/api/notes", function(req, res) {
      res.json(notesData);
    });
  

  
    // API POST Request

    app.post("/api/notes", function(req, res) {
   
    notesData.push(req.body);

    res.json(req.body);
    });

    // API DELETE Request
    app.delete("/api/notes", function(req, res) {

    });

};