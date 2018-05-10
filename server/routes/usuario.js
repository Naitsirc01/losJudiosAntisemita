/**
 *  Create by Naitsirc on 09/05/18
 *
 */

'use strict';

const express=require('express');
const UsuarioController =require('../controller/usuario');

const api=express.Router();

api.post('/login',UsuarioController.iniciarSesion);
api.put('/save',UsuarioController.guardarUsuario);
module.exports=api;