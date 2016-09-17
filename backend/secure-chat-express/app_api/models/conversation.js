'use strict';

const mongoose = require('mongoose');

var ConvoSchema = new mongoose.Schema({
    participants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Usr'}],
    message: [{type: mongoose.Schema.Types.ObjectId, ref: 'Msg'}]
});

mongoose.model('Convo', ConvoSchema);