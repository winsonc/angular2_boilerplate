var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');

gulp.task('sass', function () {
  return gulp.src('./app/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(csso())
    .pipe(gulp.dest('./app/style'));
});

gulp.task('watch', function () {
  gulp.watch('./app/sass/*.sass', ['sass']);
});

gulp.task('default', ['sass']);
