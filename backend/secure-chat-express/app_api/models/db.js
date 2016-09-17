'use strict';

// Require mongoose node module
var mongoose = require('mongoose');

// Defined the databaseURI
var dbURI = 'mongodb://localhost/Loc8r';

// Connect to the database.
mongoose.connect(dbURI);

// When mongoose is connected to the database, it will call the anonymous
// callback function and log the URI to the console.
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + dbUIR);
});

// When there is an error in the mongoose connetion, it will call the anonymous
// callback function and log the error to the console.
mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

// When mongoose disconnects from the database, it will call will call the
// anonymous function and log disconnected to the console.
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Reusable function to close Mongoose connection.
var shutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

// On SIGUSR2 we want to kill the previous process since we are
// using nodemon to restart the app on every save.
process.once('SIGUSR2', () => {
    shutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// On SIGINT we are terminating the app so we need to close the connection
// to the database.
process.on('SIGINT', () => {
    shutdown('app termination', () => {
        process.exit(0);
    });
});