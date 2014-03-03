/*jslint indent: 2 */
var grab = require('..');
var gulp = require('gulp');

gulp.task('default', function () {
  "use strict";

  gulp.src('./cases/*.html')
    .pipe(grab('body'))
    .pipe(gulp.dest('./output'));
});
