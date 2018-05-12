/**
 *  Create by Naitsirc on 09/05/18
 *
 */

'use strict';
const NoticiaController =require('../controller/noticia');

const express=require('express');
const api=express.Router();
api.put('/nsave',NoticiaController.guardarNoticia);
module.exports=api;