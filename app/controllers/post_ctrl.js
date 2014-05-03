var mongoose = require('mongoose'),
    Post = mongoose.model('Post');

exports.index = function(req, res, next) {

    Post.find().exec(function(error, posts) {
        if(error)
            throw new Error(error);

        res.render('post/index', {
            title: 'Blog Posts',
            posts: posts
        });
    });
};