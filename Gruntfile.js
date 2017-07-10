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
				},
			},
		},
		watch: {
			options: {
				livereload: true,
			},
			css: {
				files: ['css/sass/*.scss'],
				tasks: ['sass']
			},
			js: {
				files: ['js/**.js'],
			},
			html: {
				files: ['*.html', 'templates/*.html'],
			}
		}		
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['watch']);
};
