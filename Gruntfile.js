module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        //lokast strax
        singleRun: true,
        //opnast enginn gluggi, mjog hentugt
        browsers: ['Chrome'],
        //auto vid hverja breytingu
        autoWatch: true
      },
    },
    watch: {
      scripts: {
        files: [
          "src/*.js",
          "src/**/*.js"
        ],
        tasks: ['jshint', 'concat', 'uglify', 'karma'], 
        options: {
          spawn: false,
        },
      },
    },
    jshint: {
      foo: {
        src: [
          "src/*.js",
          "src/**/*.js"
        ],
      }
    },
    //Sameinar .js skrarnar i einn file 
    concat: {
      dist: {
        files: [{
          src: [
            'src/app.js',
            'src/**/*.js'
          ],
        dest: "build/<%= pkg.name %>.js"
        }]
      }
    },
    // Tekur ut oll bil og thjappar i file sem heitir *.min.js
    uglify: {
      build: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }

  });
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'karma']);
};