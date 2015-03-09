var hljs = require('highlight.js');

module.exports = function ( grunt ) {

	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-xmlmin');

	var taskConfig = {
		pkg: grunt.file.readJSON('package.json'),

		assemble: {
      options: {
        assets: 'build/assets',
        partials: ['templates/includes/*.*'],
        layout: 'default.hbs',
        layoutdir: 'templates/layouts/',
        helpers: [
          'handlebars-helper-partial', 
          'handlebars-helper-md', 
          'helper-moment',
          'handlebars-helper-equal', 
          './helpers/*'],
        marked: {
          breaks: false,
          gfm: true,
          highlight: function (code, lang)  { 
            return  hljs.highlightAuto(code, [lang]).value;
          }
        },
        site: grunt.file.readJSON('package.json')
      },
      pages: {
        expand: true,
        cwd: 'templates/',
        src: ['*.hbs', 'posts/**/*.md', '*.xml'],
        dest: 'build/'
      }
    },
    clean: [ 
      'node_modules/grunt-newer/.cache',
      'build',
      'compiled'
    ],
    copy: {
    	build: {
		    src: ['assets/css/**', 'assets/js/**', 'assets/images/**', 'assets/font/font/**'],
		    dest: 'build/'
		  },
      compile: {
        src: ['assets/css/**', 'assets/js/**', 'assets/images/**', 'assets/font/font/**'],
        dest: 'compiled/'
      },
      pages: {
        expand: true,
        cwd: 'pages/',
        src: '**',
        dest: 'compiled/'
      }
    },
    watch: {
		  scripts: {
		    files: ['templates/**/*', 'assets/**/*'],
		    tasks: ['newer:assemble', 'newer:copy', 'rename'],
		    options: {
		      spawn: false,
		    },
		  },
		},
    connect: {
      build: {
        options: {
          port: 9090,
          base: 'build/',
          keepalive: false
        }
      },
      compiled: {
        options: {
          port: 9090,
          base: 'compiled/',
          keepalive: true
        }
      }
    },
    cssmin: {
      compile: {
        options: {
          keepSpecialComments: false
        },
        files: [{
          expand: true,
          cwd: 'compiled/assets/css',
          src: '*.css',
          dest: 'compiled/assets/css'
        }]
      }
    },
    htmlmin: {
      compile: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'build/',
          src: ['**/*.html'],
          dest: 'compiled/'
        }]
      }
    },
    uglify: {
      compile: {
        files: [{
          expand: true,
          cwd: 'compiled/assets/js',
          src: '*.js',
          dest: 'compiled/assets/js'
        }]
      }
    },
    rename: {
      feed: {
          src: 'build/feed.html',
          dest: 'build/feed.xml'
      },
      sitemap: {
          src: 'build/sitemap.html',
          dest: 'build/sitemap.xml'
      }
    },
    xmlmin: {
      dist: {
        options: {
        },
        files: {
          'compiled/feed.xml': 'build/feed.xml',
          'compiled/sitemap.xml': 'build/sitemap.xml',
        }
      }
    }
  };


  grunt.initConfig(taskConfig);

  grunt.registerTask('default', [ 'clean','connect:build','copy:build','assemble','rename' ] );
  grunt.registerTask('dev', [ 'default', 'watch' ] );
  grunt.registerTask('compile', [ 'default', 'copy:compile', 'cssmin', 'htmlmin', 'xmlmin', 'uglify', 'copy:pages' ] );


};
