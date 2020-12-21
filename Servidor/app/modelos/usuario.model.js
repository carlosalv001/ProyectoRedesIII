'use strict'

const conexion = require ('../../config/conexion')

var dataModels = {
    getUsuario : (callback) =>{
        if(conexion ){
            let sql = `select * from usuario`
            conexion.query(sql, (error, rows ) => {
                if(error){
                    throw error
                }else{
                    callback(rows)

                    
                }
                
            })
        }
       
    },
    getOneUser: (data, callback) =>{
        if(conexion){ 
            console.log("GetOneUser")
            console.log(data)
            let sql = `SELECT * FROM usuario WHERE correo=${conexion.escape(data)}`
            conexion.query(sql, (error, rows) =>{
                if(error){
                    throw error
                }
                else{
                    callback(rows)
                }
            })

        }
    },
    addUser: (data, callback) => {
        if(conexion){
          //  console.log(data.correo)
            let sql=` INSERT INTO usuario(correo,nombre,password) VALUES (${conexion.escape(data.correo)}, ${conexion.escape(data.nombre)}, ${conexion.escape(data.password)})`
            conexion.query(sql, (error, rows) =>{
                if(error){
                    throw error
                }else{
                    callback({mensaje: "Se inserto de forma correcta"})
                }
            })
        }
    }
}


module.exports = dataModels