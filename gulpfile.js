var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('build_components', function() {
  return gulp.src(mainBowerFiles(), { base: 'path/to/bower_components' })
        .pipe(concat('components.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('build_app', function() {
  return gulp.src(['./public/js/app/*.js', './public/js/app/**/*.js'])
          .pipe(concat('angularApp.js'))
          .pipe(gulp.dest('./public/js'));
});

gulp.task('build', ['build_components', 'build_app'], function() {
  return gulp.src(['./public/js/components.js', './public/js/angularApp.js'])
          .pipe(concat('app.js'))
          .pipe(uglify())
          .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['build'], function() {
  gulp.watch(['./public/js/app/**/*'], ['build']);
});
