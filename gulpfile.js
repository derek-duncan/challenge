var gulp = require("gulp");
var webpack = require("webpack");

gulp.task("webpack", function(callback) {
  // run webpack
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) throw err;
    callback();
  });
});

gulp.task('default', ['webpack'], function() {
  gulp.watch(['src/**/*.jsx'], ['webpack']);
});
