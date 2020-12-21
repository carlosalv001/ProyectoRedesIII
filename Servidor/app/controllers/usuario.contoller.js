
const dataModel = require('../modelos/usuario.model')

function getUsuario(req, res){
    dataModel.getUsuario((data, error) =>{
        console.log("MODELO")
        console.log(data)
        res.json(data)
    })
}

function getOneUsuario(req, res){
    const {id} = req.params
    console.log(id)
    dataModel.getOneUser(id, (data, error) =>{
        res.json(data)

    })
}

function addUsuario(req, res){
    const {correo, nombre, password} = req.body
    console.log(correo)
    dataModel.addUser({correo, nombre, password}, (data, error) =>{
        res.json(data)
    })
}

function editUsuario(req, res){
}

function deleteUsuario(req, res){
}


module.exports ={
    getUsuario,
    getOneUsuario,
    addUsuario,
    editUsuario,
    deleteUsuario
}