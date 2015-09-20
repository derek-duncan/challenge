var gulp = require("gulp");
var livereload = require('gulp-livereload');

gulp.task('css', function(callback) {
  var postcss = require('gulp-postcss');
  var rename = require('gulp-rename');
  return gulp.src(['public/styles/**/*.pcss', '!public/styles/**/_*.pcss'])
    .pipe( postcss([ require('postcss-import'), require('postcss-nested'), require('postcss-custom-properties'), require('autoprefixer') ]) )
    .pipe( rename(function(path) {
      path.extname = '.css'
    }))
    .pipe( gulp.dest('public/styles/build/') )
    .pipe(livereload());
});

gulp.task("webpack", function(callback) {
  // run webpack
  var webpack = require("webpack");
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) throw err;
    callback();
  });
});

gulp.task('default', ['css', 'webpack'], function() {
  livereload.listen();
  gulp.watch(['src/**/*.jsx', 'src/**/*.js'], ['webpack']);
  gulp.watch(['public/styles/**/*.pcss'], ['css']);
});
