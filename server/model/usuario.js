/**
 *  Create by Naitsirc on 09/05/18
 *
 */

'use strict';

const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    rut:{
        type: String,
        require: true
    },
    correo:{
        type: String,
        require: true
    },
    direccion:{
        type: String,
        require: true
    },
    clave:{
        type: String,
        require: true
    },
    avatar:{
        type: String,
        require: true
    },
    nick:{
        type: String,
        require: true
    },
    fechaNaciemiento:{
        type: Date,
        require: true
    }

});

module.exports=mongoose.model('usuario',usuarioSchema);