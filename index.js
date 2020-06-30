'use strict'

const mongoose = require('mongoose');
const app = require('./app');


//#region Configuración del puerto y servidor
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Escuchando Puerto ${port}`))
//#endregion


//#region Conexión a la BD 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean_redSocial', { useMongoClient: true, 
                                                               useNewUrlParser: true, 
                                                               useUnifiedTopology: true, 
                                                               useFindAndModify: false, 
                                                               useCreateIndex: true })

        .then(() => console.log('Conectado correctamente a MongoDB'))
        .catch(() => console.log('Error al conectarse a MongoDB'))
//#endregion