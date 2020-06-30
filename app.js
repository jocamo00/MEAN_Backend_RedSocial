'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//#region Cargar rutas


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
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hola mundo desde el servidor de NodeJS'
    });
});
//#endregion


module.exports = app;