'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//#region Cargar rutas
let user_routes = require('./routes/user');

//#endregion


//#region Middlewares
//Configuración necesaria para Body Parser
app.use(bodyParser.urlencoded({extended:false}));
//Convierte los datos que llegan en el body en JSON
app.use(bodyParser.json());
//#endregion


//#region Cors
//#endregion


//#region Rutas
app.use('/api', user_routes);

//#endregion


module.exports = app;