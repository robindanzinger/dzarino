const { series } = require('gulp');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const filter = require('gulp-filter');
const del = require('del');

function clean() {
  return del(['dist/**', '!dist'], {force:true});
}

function buildjs() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}

function buildcss() {
  return gulp.src('src/css/*.css')
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
}

function buildhtml() {
  return gulp.src('predist/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('dist'));
}

function buildImg() {
  return gulp.src('src/img/**')
    .pipe(filter(['**/*.jpg', '**/*.png', '**/*.svg']))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
}

function buildImg2() {
  return gulp.src('src/icon/**')
    .pipe(filter(['**/*.jpg', '**/*.png', '**/*.svg']))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/icon'))
}

exports.default = series(clean, buildjs, buildcss, buildhtml, buildImg, buildImg2);
exports.clean = clean;
