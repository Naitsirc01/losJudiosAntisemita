/**
 * Create by Naitsirc and Nazgul
 */

'use strict';
const jws = require('../servicios/jws');
const bcrypt = require('bcrypt-nodejs');
const Noticia = require('../model/noticia');


function guardarNoticia(req, res) {
    const noticia = new Noticia();
    const params = req.body;

    noticia.titulo = params.titulo;
    noticia.fecha = params.fecha;
    noticia.cuerpo = params.cuerpo;
    noticia.usuario = params.usuario;
    noticia.comentarios = params.comentarios;
    Noticia.save((err, noticia_encontrada) => {
        if (err) {
            res.status(500).send({
                desc: 'error en el sistema',
                err: err.message
            })
        } else {
            if (!noticia_encontrada) {
                res.status(404).send({
                    desc: 'Noticia no guardado corretamente'
                })
            } else {
                res.status(200).send(noticia_encontrada);
            }
        }
    })
}

function getNoticia(req, res) {
    const idNoticia = req.params.id;
    Noticia.findOne({_id: idNoticia}, (err, noticia_encontrada) => {
        if (err) {
            res.status(500).send({
                desc: 'error en el sistema',
                err: err.message
            })
        } else {
            if (!noticia_encontrada) {
                res.status(404).send({
                    desc: 'Noticia no guardado corretamente'
                })
            } else {
                res.status(200).send(noticia_encontrada);
            }
        }
    })
}

function updateNoticia(req, res) {
    const body = req.body;
    Noticia.findOne({_id: body.id}, (err, noticia_encontrada) => {
        if (err) {
            res.status(500).send({
                desc: 'Hubo error con el servidor',
                err: err.message
            })
        } else {
            if (!noticia_encontrada) {
                res.status(404).send({
                    desc: 'Noticia no encontrada'
                })
            } else {
                //Modificar noticia
                noticia_encontrada.titulo = body.titulo;
                noticia_encontrada.cuerpo = body.cuerpo;
                //Guardar noticia modificada
                noticia_encontrada.save((err, noticia_guardada) => {
                    if (err) {
                        res.status(400).send({
                            desc: 'Error en el Sistema',
                            err: err.message
                        })
                    } else {
                        if (!noticia_guardada) {
                            res.status(404).send({
                                desc: 'Noticia no encontrada'
                            })
                        } else {
                            res.status(500).send({noticia_encontrada})
                        }
                    }
                });
            }
        }
    })
}

module.exports = {
    guardarNoticia,
    updateNoticia,
    getNoticia
}

