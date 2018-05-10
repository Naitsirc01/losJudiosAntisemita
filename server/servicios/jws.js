/**
 *  Create by Naitsirc on 09/05/18
 *
 */

'use strict';

const jwt=require('jwt-simple');
const moment = require('moment');
const claveSecreta= process.env.clave || '159357';
exports.createToken =function (usuario) {
    const payload={
        id:usuario.id,
        rut: usuario.rut,
        correo: usuario.correo,
        direccion: usuario.direccion,
        nick: usuario.nick,
        fechaNaciemiento: usuario.fechaNaciemiento,
        iat: moment().unix(),
        exp:moment().add(10,'hours').unix(),
    };
    return jwt.encode(payload,claveSecreta);
};