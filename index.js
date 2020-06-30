'use strict'

let mongoose = require('mongoose');

//#Conexión a la BD 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean_redSocial', { useMongoClient: true, 
                                                               useNewUrlParser: true, 
                                                               useUnifiedTopology: true, 
                                                               useFindAndModify: false, 
                                                               useCreateIndex: true })

        .then(() => console.log('Conectado correctamente a MongoDB'))
        .catch(() => console.log('Error al conectarse a MongoDB'))
//#endregion