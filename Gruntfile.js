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
	// livereload: {
			// 	options: {
			// 		base: 'css',
			// 	},
			// 	files: ['css/styles.css']
			// },
			// scripts: {
			// 	files: 'css/sass/*.scss',
			// 	tasks: ['sass'],
			// 	options: {
			// 		debounceDelay: 250,
			// 		livereload: true,
			// 	},
			// },
		
		
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['watch']);
};