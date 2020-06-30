'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = Schema({
    text       : String,
    created_at : String,
    emmiter    : { type: Schema.ObjectId, ref: 'User'},
    receiver   : { type: Schema.ObjectId, ref: 'User'}
});

// Se indica entidad y esquema
module.exports = mongoose.model('Message', MessageSchema);