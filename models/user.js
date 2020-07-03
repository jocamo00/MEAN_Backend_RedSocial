'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name        : {
        type    : String,
        require : true
    },
    surname     : {
        type    : String,
        require : true
    },
    nick          : {
        type      : String,
        lowercase : true,
        unique    : true,
        require   : true
    },
    email         : {
        type      : String,
        unique    : true,
        lowercase : true,
        require   : true
    },
    password    : {
        type    : String,
        require : true
    },
    role        : {
        type    : String,
        require : true
    },
    image       : {
        type    : String,
        require : true
    }
});

// Se indica entidad y esquema
module.exports = mongoose.model('User', UserSchema);