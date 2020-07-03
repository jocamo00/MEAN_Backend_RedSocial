'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = '0000';


exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});
    }

    let token = req.headers.authorization.replace(/['"]+/g, ''); //Guarda el token y quita las comillas que pudieran haber

    try {
        let payload = jwt.decode(token, secret); //decodifica el token 

        if(payload.exp <= moment().unix()){ //si la fecha del token es menor o igual a la fecha actual el token a expirado
            return res.status(401).send({
                message: 'El token ha expirado'
            });
        }

        req.user = payload; //asi tenemos todos los datos del usuario que envia el token
        
    } catch (error) {
        return res.status(404).send({
            message: 'El token no es válido'
        });
    }

    next();
    
}