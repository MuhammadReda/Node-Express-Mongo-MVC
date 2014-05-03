var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    compress = require('compression'),
    methodOverride = require('method-override'),
    favicon = require('serve-favicon'),
    logger = require('morgan');

module.exports = function(app, config) {

    app.set('port', config.port);
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'jade');

    app.use(favicon(config.root + '/public/images/favicon.ico'));
    app.use(express.static(config.root + '/public'));
    app.use(compress());
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(session({
        key: 'sid',
        secret: 'shhhhh, this is secret',
        cookie: {
            secure: true,
            maxAge: 3600000 // 1 hour
        }
    }));
    app.use(bodyParser());
    app.use(methodOverride());
};