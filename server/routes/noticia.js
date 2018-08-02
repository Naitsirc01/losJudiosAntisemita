/**
 *  Create by Naitsirc on 09/05/18
 *
 */

'use strict';
const NoticiaController =require('../controller/noticia');
const mdAuth=require('../midleware/midleware');// Esta cosa sirve para que sea mas seguro

const express=require('express');
const api=express.Router();
//api.post('crearNoticia',NoticiaController.crearNoticia); funcion no creada
api.put('/nsave',NoticiaController.guardarNoticia);
api.get('/getNoticia/:id',NoticiaController.updateNoticia);
//http://paginaNoticia.cl/getNoticia/prueba123
module.exports=api;