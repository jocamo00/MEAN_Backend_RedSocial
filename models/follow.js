'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = Schema({
    user     : { type: Schema.ObjectId, ref: 'User'},
    follower : { type: Schema.ObjectId, ref: 'User'}
});

// Se indica entidad y esquema
module.exports = mongoose.model('Follow', FollowSchema);