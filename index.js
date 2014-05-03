var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var config = require('./config/appConfig');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
    throw new Error('unable to connect to database at: ' + config.db);
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(modelsPath + '/' + file);
    }
});

var app = express();
var router = express.Router();

require('./config/express')(app, config);
require('./config/routes')(app, router);

app.listen(config.port);