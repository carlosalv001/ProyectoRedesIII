const route= require('express').Router()
const {getUsuario, getOneUsuario, addUsuario, editUsuario, deleteUsuario} = require ('../controllers/usuario.contoller')

 route.route('/').get(getUsuario)

 route.route('/:correo').get(getOneUsuario)

 route.route('/').post(addUsuario)

 route.route('/').put(editUsuario)

 route.route('/').delete(deleteUsuario)

module.exports =route