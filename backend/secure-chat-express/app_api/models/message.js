'use strict';

const mongoose = require('mongoose');

var MsgSchema = new mongoose.Schema({
    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'Usr'}
    message: {type: String, maxlength: 160},
    date: {type: Date, default: Date.now}
});

mongoose.model('Msg', MsgSchema);