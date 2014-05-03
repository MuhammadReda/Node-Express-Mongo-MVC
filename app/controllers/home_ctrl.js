exports.index = function(req, res, next) {

    res.render('home/index', {
        title: 'Welcome to Node-Express-Mongo MVC',
        body: 'MVC application structure for NodeJs using Express 4.1+ and MongoDB'
    });

};