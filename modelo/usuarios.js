'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Usuarios = Schema({
    id_Usuarios:Number,
    nombre_Completo: String,
    rol: String,
    email: String,
    numero_Telefono:Number,
    password: String,
    
});

module.exports = mongoose.model('Usuarios', Usuarios);