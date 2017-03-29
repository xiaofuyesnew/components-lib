const gulp = require('gulp')
const sass = require('gulp-sass')
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