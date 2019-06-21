// app.js

// [LOAD PACKAGES]
var express     = require('express');
var app         = express();

var string      = require('./public/string');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

var util				= require('./public/util');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 500;

/*
[CONFIGURE MODELS]
*/
var AccountModule = require('./models/Account');
var Account = AccountModule.model;
var AccountSchema = AccountModule.schema;
var Activity = require ('./models/Activity');
var Bank = require ('./models/Bank');
var Current = require ('./models/Current');
var Debt = require ('./models/Debt');
var LogModule = require ('./models/Log');
var Log = LogModule.model;
var LogSchema = LogModule.schema;
var User = require ('./models/User');

/*
[CONFIGURE ROUTER]
*/

/*
[USING ROUTER]
*/
// app.use('/tichu/score', score);

app.use(express.static('public'));

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect(string.dev_database, {useNewUrlParser: true});

// [RUN SERVER]
var server = app.listen(port, function(){
    console.log("Express server has started on port " + port);
});
