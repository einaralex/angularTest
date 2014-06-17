module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: {
				src: [
					"gruntfile.js",
					"src/*.js",
					"src/**/*.js"
					],
				},
			},
			concat: {
				options: {
					separator: ';',
				},
				dist: {
						src: [
						'src/js/app.js', 
						'src/**/*.js'
						],
						dest: 'build/<%= pkg.name %>.js'
				}
			},
			uglify: {
				build: {
					src: 'build/<%= pkg.name %>.js',
					dest: 'build/<%= pkg.name %>.min.js'
				}
			},
			watch: {
				scripts: {
					files: [
						"*.html",
						"templates/*.html",
						"src/*.js",
						"src/**/*.js"
						],
					tasks: ['jshint', 'concat', 'uglify'], 
					options: {
						livereload: true,
						spawn: false,
					}
				}
			},
			connect: {
				server: {
					options: {
						port: 8090,
						keepalive: true,
						livereload: true,
						open:true,
					}
				}
			}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['jshint', 'uglify', 'concat', 'connect']);

};