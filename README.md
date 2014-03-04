Query HTML content and replace the origin file

USAGE
-----

Grab every thing in `<body>` and reaplce the file. Useful when you only want something in the HTML files.

    var grab = require('gulp-query-html');
    var gulp = require('gulp');

    gulp.task('default', function () {
        gulp.src('./cases/*.html')
            .pipe(grab('body'))
            .pipe(gulp.dest('./output'));
    });


LICENSE
-------

MIT
