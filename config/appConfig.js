var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var db_dev = 'mongodb://localhost/mvc-app-dev';
var db_prod = 'mongodb://localhost/mvc-app-prod';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'node-express-mongo-mvc'
        },
        port: 3000,
        db: db_dev
    },

    test: {
        root: rootPath,
        app: {
            name: 'node-express-mongo-mvc'
        },
        port: 3000,
        db: db_dev
    },

    production: {
        root: rootPath,
        app: {
            name: 'node-express-mongo-mvc'
        },
        port: 3000,
        db: db_prod
    }
};

module.exports = config[env];