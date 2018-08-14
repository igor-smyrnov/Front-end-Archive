var gulp = require('gulp');
var inject = require('gulp-inject');
const jasmine = require('gulp-jasmine');

gulp.task('default', function() {
    gulp.src('spec/test.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine())
});
gulp.task('index', function () {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:

    return target
        .pipe(inject(gulp.src(
            [
                './bower_components/jquery/**/*.min.*',
                './bower_components/**/*.min.*',
                './app/**/*.js',
                './assets/**/*.css',
                '!./bower_components/**/*sizzle*.*'
            ],
            {read: false}), {relative: true}))
        .pipe(gulp.dest(''));
});
