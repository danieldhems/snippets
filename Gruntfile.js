module.exports = function(grunt){
	grunt.initConfig({
		watch: {
			sass: {
				files: ['client/app/**/*.scss'],
				tasks: ['sass']
			}
		},

		sass: {
			options: {
				style: 'expanded'
			},
			dev: {
				src: ['client/app/app.scss'],
				dest: 'client/app/app.css'
			}
		},

		express: {
			dev: {
				options: {
					script: 'server/app.js',
					node_env: 'development'
				}
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['express','watch']);
	grunt.registerTask('serve', ['express']);
};