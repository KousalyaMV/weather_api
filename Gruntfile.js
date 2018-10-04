module.exports = function(grunt) {
    "use strict";
  
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      ts: {
        app: {
          files: [{
            src: ["./server/**/*.ts", "!./server/src/.baseDir.ts","!node_modules/**"],
            dest: "./server/dist"
          }],
          options: {
            module: "commonjs",
            target: "es6",
            //moduleResolution:"node",
            watch: "./server/src",
            sourceMap: true,
            rootDir: "./server/src"
          }
        }
      },
      
    watch: {
      ts: {
        files: ["./server/**/*.ts"],
        tasks: ["ts"]
      },
      views: {
        files: ["./client/views/**/*.ejs"],
        tasks: ["ts"]
      }
    }
    });
  
    //grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-ts");
  
    grunt.registerTask("default", [
     // "copy",
      "ts"
    ]);
  
  };