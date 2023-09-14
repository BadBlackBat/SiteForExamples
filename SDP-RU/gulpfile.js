const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixes = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('sass'));
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();

const clean = () => {
  return del(['dist'])
};

const fonts = () => {
  return src('src/fonts/**')
  .pipe(dest('dist/fonts'))
};

const resources = () => {
  return src('src/resources/**')
  .pipe(dest('dist/resources'))
};

const styles = () => {
  return src('src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(sass({
      outputStyle: 'compressed'
    })).on('error', notify.onError())
    .pipe(autoprefixes({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/styles'))
    .pipe(browserSync.stream())
};

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const scripts = () => {
  return src('src/js/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(concat('scripts.js'))
  .pipe(uglify({
    toplevel: true
  }).on('error', notify.onError()))
  .pipe(sourcemaps.write())
  .pipe(dest('dist/js'))
  .pipe(browserSync.stream())
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir:'dist'
    }
  })
};

const images = () => {
  return src([
    'src/img/**/*.jpg',
    'src/img/**/*.svg',
    'src/img/**/*.png',
    'src/img/**/*.webp',
    'src/img/**/*.ico',
  ])
  .pipe(image())
  .pipe(dest('dist/img'))
};

watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.scss', styles)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)

exports.htmlMinify = htmlMinify;
exports.styles = styles;
exports.scripts = scripts;
exports.resources = resources;
exports.clean = clean;

exports.default = series(clean, fonts, resources, htmlMinify, styles, scripts, images, watchFiles);