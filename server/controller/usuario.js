/**
 *  Create by Naitsirc on 09/05/18
 *
 */

'use strict';

const bcrypt = require('bcrypt-nodejs');
const Usuario=require('../model/usuario');
const jws=require('../servicios/jws');

function iniciarSesion(req, res) {
    const params=req.body;
    const rutMail=params.rutMail;
    const password=params.clave;

    Usuario.findOne({}).or([{rut: rutMail},{correo: rutMail}]).exec(function (err,usuario_encontrado) {
        if(err){
            res.status(500).send({
                desc: 'Error en el servidor',
                err: err.message
            })
        }else{
            if(!usuario_encontrado){
                res.status(404).send({
                    desc: 'Usuario no encontrado'
                })
            }else{
                bcrypt.compare(password,usuario_encontrado.clave,function(err,check){
                    if(check){
                        if(params.gettoken){
                            res.status(200).send({token:jwt.createToken(usuario_encontrado)})
                        }else{
                            res.status(200).send(usuario_encontrado);
                        }
                    }else{
                        res.status(400).send({
                            desc: 'contraseña incorrecta'
                        })
                    }
                })
            }
        }
    })
}

function guardarUsuario(req,res){
    const usuario=new Usuario();
    const params=req.body;

    usuario.nombre=params.nombre;
    usuario.rut=params.rut;
    usuario.correo=params.direccion;
    usuario.clave=bcrypt.hashSync(params.password);
    usuario.avatar='default.jpg';
    usuario.nick=params.nick;
    const fecha=new Date(params.fechaNaciemiento);
    usuario.fechaNacimiento=params.fechaNaciemiento;
    usuario.save((err,usuario_guardado)=> {
        if(err){
            res.status(500).send({
                desc:'error en el sistema',
                err:err.message
            })
        }else{
            if(!usuario_guardado){
                res.status(404).send({
                    desc:'Usuario no guardado corretamente'
                })
            }else{
                res.status(200).send(usuario_guardado);
            }
        }
    })
}

module.exports={
  iniciarSesion,
    guardarUsuario
};