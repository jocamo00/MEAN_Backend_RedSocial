'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublicationSchema = Schema({
    text      : String,
    file      : String,
    create_at : String,
    user      : { type: Schema.ObjectId, ref: 'User'}
});

// Se indica entidad y esquema
module.exports = mongoose.model('Publication', PublicationSchema);