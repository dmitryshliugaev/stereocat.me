var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var minify = require('gulp-minify');
var imageop = require('gulp-image-optimization');
var del = require('del');

var path = 'dist';

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest(path));
});

gulp.task('compress-js', function() {
  gulp.src('js/*.js')
    .pipe(minify())
    .pipe(gulp.dest(path))
});

gulp.task('images', function(cb) {
  gulp.src(['img/*.png', 'img/*.jpg', 'img/*.gif', 'img/*.jpeg']).pipe(imageop({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  })).pipe(gulp.dest(path)).on('end', cb).on('error', cb);
});

gulp.task('clean', function(cb) {
  del(path, cb);
});

gulp.task('default', ['clean', 'minify-css', 'compress-js', 'images']);
