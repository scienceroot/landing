const gulp = require('gulp')
const browserSync = require('browser-sync')

const serve = browserSync => {
	browserSync.init({
		server: './src'
	})
}

module.exports = serve