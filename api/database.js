const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

db_name = path.join(__dirname, "database.db");
const db = new sqlite3.Database(db_name, err =>{
    if (err){
        return(err);
    }else{
        console.log('data base conected');
    }
    
});



//Crea la tabla con los archivos
db.run('CREATE TABLE text(ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, TEXTNAME TEXT, TEXTCONTENT TEXT)')

//Dado nombre de un archivo lo inserta en la D.B
function tabla(fileName){

    fs.readFile(fileName, 'utf-8', (error, data) =>{
        if(!error){
            const insert = 'INSERT INTO text (TEXTNAME, TEXTCONTENT) VALUES (?,?)'
            db.run(insert, [path.basename(fileName), data]);
        }else{
            console.log(error.message)
        }
    }); 
};
//lee el txt e inserta el contenido en la D.B
function iterarFs() {
    fs.readdir('./archivos_txt', (error, files) =>{
        files.forEach(file => {
            tabla(path.join(__dirname, './archivos_txt', file));
            
        });
        console.log('table created successfully')
    });
    
};

iterarFs();

module.exports = db


















