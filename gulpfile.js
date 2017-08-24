var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');
var browserify = require('gulp-browserify');

gulp.task('build-html', function() {
	return gulp.src('src/html/**/*')
	.pipe(gulp.dest('public/dist/html'));
})

gulp.task('build-js', function() {
  	return gulp.src('src/js/app.js')
  	.pipe(browserify())
    .pipe(gulp.dest('public/dist/js'));
});


gulp.task('build-css', function() {
  	return gulp.src('src/scss/**/*')
  	.pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/dist/css'));
});


gulp.task('start', function () {
	nodemon( {
		ignore: 'public/dist/*',
		ext: 'html js scss',
		script: 'server.js',
		tasks: ['compile']
	});
});

gulp.task('compile', ['build-html', 'build-js', 'build-css']);
gulp.task('default', ['compile', 'start']);