const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const gulp = require('gulp');

gulp.task('default', function () {
  const bundler = browserify({
    entries: 'js/app.js',
    debug: true
  });

  bundler.transform(babelify);

  bundler.bundle()
    .on('error', function (err) { console.error(err); })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('./js/**/*.js', ['default']);
});
