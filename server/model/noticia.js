/**
 *  Create by Naitsirc on 09/05/18
 *
 */

'use strict';

const mongose= require('mongose');
const Schema= mongose.Schema;

const noticiasSchema = new Schema({
    titulo: {
        type: String,
        require: true
    },
    fecha:{
        type: Date,
        require: true
    },
    cuerpo:{
        type:String,
        require: true
    },
    usuario:{
        type: mongose.Schema.Types.ObjectId,
        require: true
    },
    comentarios: [{
        type: String,

    }]

});

module.exports=mongose.model('noticias',noticiasSchema);