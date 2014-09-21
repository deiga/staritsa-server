var mongoose = require('mongoose');
var UserModel = require('./schemas/users');

// Connections
var developmentDb = 'mongodb://localhost/test';
var productionDb = 'urlToYourProductionMongoDb';
var usedDb;

if (process.env.NODE_ENV === 'development') {
    usedDb = developmentDb;
} else if (process.env.NODE_ENV === 'production') {
    usedDb = productionDb;
}
mongoose.connect(usedDb);

// get an instance of our connection to our database
var db = mongoose.connection;

// Logs that the connection has successfully been opened
db.on('error', console.error.bind(console, 'connection error:'));
// Open the connection
db.once('open', function callback () {
  console.log('Database Connection Successfully Opened at ' + usedDb);
});

exports.users = UserModel;
