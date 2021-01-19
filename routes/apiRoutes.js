// dependencies/imports for route functionality
var fs = require("fs");
var notesData = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {
    // function to write notes as strings in db.json
    function writeToDB(){
        fs.writeFileSync("./db/db.json", JSON.stringify(notesData), function(err) {
                if (err) throw err;
                console.log('Saved!');
        });
    }

    // API GET Request
    app.get("/api/notes", function(req, res) {
        // here if someone goes to the notes page, they are given the notes saved in db
      res.json(notesData);
    });
  

  
    // API POST Request

    app.post("/api/notes", function(req, res) {
        // here is where the request is made to add a new note to db, gather info from body of request
        var noteToAdd = req.body;
        // got some help to add randomly generated id using uuid, add it as the id param by calling the function on it
        noteToAdd.id = uuidv4();
        // once the id has been added, noteToAdd can be pushed into the array notesData, stored in db
        notesData.push(noteToAdd);
        res.json(noteToAdd);

    writeToDB();
    });

    // API DELETE Request
    app.delete("/api/notes/:id", function(req, res) {
        // when clicking on delete, need to access the id property to be able to identify which note is being deleted
        var noteToDelete = req.params.id;
        // loop through notes in notesData array, to find the one with matching id
        for (let i = 0; i < notesData.length; i++) {
            if (noteToDelete == notesData[i].id){
                // splice is starting at i, the matching id, and removing ONE note here
                notesData.splice(i, 1)
            } 
        }
        // send new array without the note that just got deleted
        res.send(notesData);
        // rewrite the array to the db
        writeToDB();
    });

};