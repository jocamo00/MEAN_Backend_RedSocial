'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = '0000';


exports.createToken = function(user){ //Recibe el usuario al que se va a generar el token

    let payload = {
        sub     : user._id,
        name    : user.name,
        surname : user.surname,
        nick    : user.nick,
        email   : user.email,
        role    : user.role,
        image   : user.image,
        iat     : moment().unix(), //fecha de creación
        exp     : moment().add(30, 'days').unix() //fecha de expiración
    };

    return jwt.encode(payload, secret); //genera el token
};