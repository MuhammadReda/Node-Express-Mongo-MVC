exports.index = function(req, res, next) {

    res.render('home/index', {
        title: 'Welcome to Node-Express-Mongo MVC',
        body: ''
    });

};