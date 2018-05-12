/**
 * Create by Naitsirc and Nazgul
*/

'use strict';
//const jws=require('../servicios/jws');
//const bcrypt = require('bcrypt-nodejs');
const Noticia=require('../model/noticia');


function guardarNoticia(req,res){
    const noticia=new Noticia();
    const params=req.body;

    noticia.titulo=params.titulo;
    noticia.fecha=params.fecha;
    noticia.cuerpo=params.cuerpo;
    noticia.usuario=params.usuario;
    noticia.comentarios=params.comentarios;
    Noticia.save((err,noticia_encontrada)=> {
        if(err){
            res.status(500).send({
                desc:'error en el sistema',
                err:err.message
            })
        }else{
            if(!noticia_encontrada){
                res.status(404).send({
                    desc:'Noticia no guardado corretamente'
                })
            }else{
                res.status(200).send(noticia_encontrada);
            }
        }
    })
}

module.exports={
    guardarNoticia
}

