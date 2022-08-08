// Create express app
const express = require("express")
const app = express()
const fs = require('fs');

// Data Base Reference
const db = require("./database.js");

// Server port
var HTTP_PORT = 3000 

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

// Root endpoint
app.get("/www.melichallenge.test/text_name=&termino=", (req, res,) => {
    res.json({"message":"Ok"})
});

//cuenta la frecuencia del termino
function countOccurences(string, word) {
    return  string.split(word).length - 1;
}


// Endpoints

//Obtiene nombre del texto y termino
app.get("/text_name=:TEXTNAME&termino=:term", (req, res) => {
    var sql = "select TEXTCONTENT from text where TEXTNAME = ?"
    var params = [req.params.TEXTNAME]
    var term = [req.params.term]
    db.get(sql, params, (err,row) => {
        if (err) {
          res.status(400).json({"error":err.message});
        return;
        }
       
       res.json("Frecuencia: " + countOccurences(row.TEXTCONTENT, term))
    });
      
});

//Obtiene el termino
app.get("/termino=:term", (req, res) => {
    var sql = "SELECT * from text"
    var params = [req.params.TEXTNAME]
    var term = [req.params.term]
    var ocurrenciasTotales = 0
    db.all(sql, params, (err,row) => {
        if (err) {
          res.status(400).json({"error":err.message});
        return;
        }
        row.forEach(function(txt){
            ocurrenciasTotales = ocurrenciasTotales + countOccurences(txt.TEXTCONTENT, term)
        })
        
        res.json("Frecuencia: " + ocurrenciasTotales)
        
    });
    
});





// Default response for any other request
app.use(function(req, res){
    res.status(404);
});

