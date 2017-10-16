const gulp = require('gulp')

const watch = browserSync => {
	gulp.watch(['./src/**/*.scss'], ['sass'])	
	gulp.watch('./src/*.html', browserSync.reload)
}

module.exports = watch