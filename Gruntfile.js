'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'css/styles.css': 'css/sass/main.scss'
				}
			}
		},
		watch: {
			livereload: {
				options: {
					base: 'css',
				},
				files: ['css/styles.css']
			},
			scripts: {
				files: 'css/sass/*.scss',
				tasks: ['sass'],
				options: {
					debounceDelay: 250,
					livereload: true,
				},
			},
		},
		
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-livereload');


	grunt.registerTask('default', ['watch', 'livereload']);
};