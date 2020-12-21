'use strict'

const mysql = require('mysql'),
      data = require('./datosPrivados.json'),
      objectConnection = {
        host : data.mysql.host,
        port: data.mysql.port,
        user: data.mysql.user,
        pass: data.mysql.pass,
        database: data.mysql.database
      }

const myCon = mysql.createConnection(objectConnection);

myCon.connect((err) => {
    if(err){
        console.log(`Hubo un error: ${err}`  );
    }else{
        console.log('Base de datos conecatada');
    }
})

module.exports=myCon