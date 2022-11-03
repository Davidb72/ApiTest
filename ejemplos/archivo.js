const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta,(err,data)=>{
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.error('No he podido escribirlo'+err)
        }
    });
}

escribir(__dirname+'/archivo1.txt','Soy un nuevo archivo');
leer(__dirname + '/archivo1.txt',console.log)