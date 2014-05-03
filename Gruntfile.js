'use strict';
var request = require('request');

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        develop: {
            server: {
                file: 'index.js'
            }
        },

        watch: {
//            options: {
//                nospawn: true,
//                livereload: reloadPort
//            },
            js: {
                files: [
                    'app.js',
                    'app/**/*.js',
                    'config/*.js'
                ],
                tasks: ['develop']
            },
            jade: {
                files: ['app/views/**/*.jade'],
                tasks: ['develop']
            },
            scss: {
                files: ['public/scss/*.scss'],
                tasks: ['compass', 'develop']
            }
        }
    });

    var files;
    grunt.config.requires('watch.js.files');
    files = grunt.config('watch.js.files');
    files = grunt.file.expand(files);


    //grunt.registerTask('default', ['compass', 'develop', 'watch']);
    grunt.registerTask('default', ['develop', 'watch']);
};