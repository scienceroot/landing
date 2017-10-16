const gulp = require('gulp')
const sass = require('./config/sass')
const watch = require('./config/watch')
const serve = require('./config/serve')
const browserSync = require('browser-sync').create()

gulp.task('sass', () => sass(browserSync))
gulp.task('watch', () => watch(browserSync))
gulp.task('serve', ['sass', 'watch'], () => serve(browserSync))

gulp.task('default', ['serve'])