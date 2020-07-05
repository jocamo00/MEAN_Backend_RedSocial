'use strict'

const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');


function home(req, res) {
    res.status(200).send({
        message: 'Hola mundo desde el servidor de NodeJS'
    });
};


function pruebas(req, res) {
    console.log(req.body);
    res.status(200).send({
        message: 'Acción de prueba en el servidor de NodeJS'
    });
};

//#region Registro
function saveUser(req, res){
    let params = req.body; //Recoje parametros del body
    let user = new User(); //Crea un nuevo objeto User

    if(params.name && params.surname && params.nick && params.email && params.password){

        user.name    = params.name;
        user.surname = params.surname;
        user.nick    = params.nick;
        user.email   = params.email;
        user.role    = 'ROLE_USER';
        user.image   = null;

        bcrypt.hash(params.password, null, null, (err, hash) => { //hasea la contraseña
            user.password = hash;

            user.save((err, userStored) => { //Guarda el usuario
                if(err) return res.status(500).send({message: 'Error al guardar el usuario'});

                if(userStored){
                    res.status(200).send({user: userStored});
                }else{
                    res.status(404).send({message: 'No se ha registrado el usuario'});
                }
            });
        });
    }else{
        res.status(200).send({
            message: 'Envia todos los campos necesarios!!'
        });
    }
}
//#endregion

//#region Login
function loginUser(req, res){
    let params = req.body; //Recoge los parametros que llegan

    let email = params.email; //Los almacena
    let password = params.password;

    User.findOne({ email: email}, (err, user) => { //Muestra el usuario con ese email
        if(err) return res.status(500).send({message: 'Error en la petición'});

        if(user){
            bcrypt.compare(password, user.password, (err, check) => { //Compara el password que llega con el del usuario
                if(check){

                    if(params.gettoken){
                        //generar y devolver el token
                        return res.status(200).send({
                            token: jwt.createToken(user) //llama al servicio y al método correspondiente y le pasa el user
                        });
                    }else{
                        //devolver datos del usuario
                    user.password = undefined; //Para eliminar esta propiedad y que no la muestre
                    return res.status(200).send({user})
                    }
                    
                }else{
                    return res.status(404).send({message: 'El usuario no se ha podido identificar'});
                }
            });
        }else{
            return res.status(404).send({message: 'El usuario no se ha podido identificar!!'})
        }
    }); 
}
//#endregion

//#region Conseguir datos de un usuario
function getUser(req, res){
    var userId = req.params.id; // Recoje el id

    User.findById(userId, (err, user) => {
        if(err) return res.status(500).send({message: 'Error en la petición'});

        if(!user) return res.status(404).send({message: 'El usuario no existe'});

        return res.status(200).send({user}); // Devuelve el usuario elegido
    });
}
//#endregion


module.exports = { 
                    home, 
                    pruebas, 
                    saveUser, 
                    loginUser,
                    getUser 
                 }