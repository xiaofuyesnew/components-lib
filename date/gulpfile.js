const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

gulp.task('sass', () => {
    return gulp.src('src/style/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('dist/static/css'))
})

gulp.task('tpl', () => {
    return gulp.src('src/page/*.html')
        .pipe(gulp.dest('dist/'))
})

gulp.task('js', () => {
    return gulp.src('src/script/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/static/js'))
})

gulp.task('lib', () => {
    return gulp.src('src/lib/*.js')
        .pipe(gulp.dest('dist/static/js/lib'))
})

