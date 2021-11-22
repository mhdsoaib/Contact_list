//require the library

const mongoose = require('mongoose');

//connct to the database

mongoose.connect('mongodb://localhost/contact_lst_db');

//aquire the connection to check if it is succesful

const db= mongoose.connection;

//error

db.on('error', console.error.bind(console,'error connecting to db'));

//up and running then print this message
db.once('open',function(){
    console.log('succesfully connected to database');
});
