/*jslint node: true */

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
          site: {
            src: 'assets/css/site.css'
          }
        },
        cssmin: {
          combine: {
            files: {
              'assets/css/site.min.css': ['assets/css/site.css']
            }
          }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json', '_config.yml'],
                commitFiles: ['-a'],
                push: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['autoprefixer', 'cssmin']);
};
