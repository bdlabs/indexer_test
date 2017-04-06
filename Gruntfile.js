module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      // Your project's source files
      src : 'test/**/*.js',
      options: {
        specs: 'test/**/*.js',
        template: require('grunt-template-jasmine-requirejs')
      }
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('test', 'jasmine');
};
