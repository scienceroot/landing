const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefix = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')

const bundle = browserSync => {

  return gulp.src('./src/assets/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
    .pipe(autoprefix({ browsers: ['last 5 versions', 'ie 10'] }))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/assets/dist'))
    .pipe(browserSync.stream())

}

module.exports = bundle