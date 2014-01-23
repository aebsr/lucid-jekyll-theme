path = require 'path'

module.exports = (grunt) ->
  _ = grunt.util._

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    watch:
      options:
        atBegin: true
      autoprefixer:
        files: ['assets/css/*.css']
        tasks: ['autoprefixer']
    autoprefixer:
      site:
        src: 'assets/css/site.css'

  # Load grunt plugins
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-autoprefixer'

  # Define tasks.
  grunt.registerTask 'default', ['watch']
  grunt.registerTask 'prefix', ['autoprefixer']
