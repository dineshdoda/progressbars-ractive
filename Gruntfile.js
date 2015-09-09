module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy'); 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks('grunt-contrib-less'); 
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-usemin");
  grunt.loadNpmTasks("grunt-contrib-clean");


  
  grunt.initConfig({
	clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ["dist/"]
                }]
            }
	},
    less: {
		development: {
			
			files: {
				"dist/css/style.css": "css/style.less"
			}
		}					
  },	
    copy:{
		dist: {
			files: [{
			expand: true,
			src: ['index.html','js/*.js'],
			dest: "dist"
		}]
      }
    },
	uglify: {
      dist:{
        src:['dist/js/ractive.js','dist/js/ractive-events-tap.js','dist/js/progressbar.js'],
        dest:'dist/js/scripts.min.js'
      }
    },
    jshint: {
		files: ['Gruntfile.js','js/progressbar.js']
    },
	useminPrepare: {
            html: ["dist/index.html"]
    },
	usemin: {
        html: ["dist/index.html"],
        css: ["dist/css/*.css"]
        
		},
        cssmin: {
            target: {
                files: {
                    'dist/css/style.css': ['css/style.css']
                }
            }
        }
	});

  grunt.registerTask('default', ['jshint','less','copy','uglify','useminPrepare','usemin','cssmin:target']);
  
  return grunt;
};
