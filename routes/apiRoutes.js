// dependencies/imports for route functionality
var fs = require("fs");
var notesData = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {
    // function to write notes as strings in db.json
    function writeToDB(notes){
        notes = JSON.stringify(notes);
        fs.writeFileSync("./db/db.json", notes, function(err) {
                if (err) {
                    return console.log(err);
                }
        });
    }

    // API GET Request
    app.get("/api/notes", function(req, res) {
      res.json(notesData);
    });
  

  
    // API POST Request

    app.post("/api/notes", function(req, res) {
   
    notesData.push(req.body);

    res.json(req.body);

    writeToDB();
    });

    // API DELETE Request
    app.delete("/api/notes/:id", function(req, res) {


        writeToDB();
    });

};