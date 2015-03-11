var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('build', function() {
  return gulp.src(['./public/js/app/*.js', './public/js/app/**/*.js'])
          .pipe(concat('app.js'))
          .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['build'], function() {
  gulp.watch(['./public/js/app/**/*'], ['build']);
});