'use strict';
module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var files,
        watchOptions = {
            nospawn: true,
            livereload: true
        };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        develop: {
            server: {
                file: 'index.js'
            }
        },

        watch: {
            js: {
                files: [
                    'app.js',
                    'app/**/*.js',
                    'config/*.js'
                ],
                tasks: ['develop'],
                options: watchOptions
            },
            jade: {
                files: ['app/views/**/*.jade'],
                tasks: ['develop'],
                options: watchOptions
            },
            scss: {
                files: ['public/scss/*.scss'],
                tasks: ['compass', 'develop'],
                options: watchOptions
            }
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        }
    });

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    grunt.config.requires('watch.js.files');
    files = grunt.config('watch.js.files');
    files = grunt.file.expand(files);


    grunt.registerTask('default', ['compass', 'develop', 'watch']);
};