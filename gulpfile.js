var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');


gulp.task('build-js', function() {
  	return gulp.src('public/src/js/**/*.js')
    .pipe(gulp.dest('public/dist/js'));
});


gulp.task('build-css', function() {
  	return gulp.src('public/src/scss/index.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/dist/css'))
    .pipe(livereload());
});


gulp.task('start', function () {
	nodemon( {
		ignore: 'public/dist/*',
		ext: 'html js scss',
		script: 'server.js',
		tasks: ['compile']
	});
});

gulp.task('compile', ['build-js', 'build-css']);
gulp.task('default', ['compile', 'start']);