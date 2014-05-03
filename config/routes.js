module.exports = function(app, router) {

    app.use(router);
    app.use(function(req, res) {
        res.status(404).render('404', {
            title: 'Page not found (AKA 404 Error)'
        });
    });

    //home route
    var home = require('../app/controllers/home_ctrl');
    router.get('/', function(req, res, next) {
        home.index(req, res, next);
    });

    // post route
    var post = require('../app/controllers/post_ctrl');
    router.get('/blog', function(req, res, next) {
        post.index(req, res, next);
    });

};