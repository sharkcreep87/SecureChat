'use strict';

// Require mongoose node module
const mongoose = require('mongoose');

var UsrSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    conversation: [{type: mongoose.Schema.Types.ObjectId, ref: 'Conversation'}]
});

mongoose.model('Usr', UsrSchema);