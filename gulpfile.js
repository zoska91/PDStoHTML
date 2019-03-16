const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const babili = require("gulp-babili");
const htmlReaplace = require('gulp-html-replace');
const htmlMin = require('gulp-htmlmin');
const del = require('del');
// const sequence = require('run-sequence');

const config = {
  dist: 'public/',
  src: './',
  cssin: './**/*.css',
  cssout: 'public/',
  cssoutname: 'style.css',
  jsin: './js/**/*.js',
  jsout: './public/js',
  jsoutname: 'script.js',
  htmlin: './*.html',
  htmlout: './public',
  cssreplaceout: 'style.css',
  jsreplaceout: 'js/script.js'


}



//minifikacja CSSS
gulp.task('css', () =>
  gulp.src(config.cssin)
    .pipe(concat(config.cssoutname))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.cssout))
)

// minifikacja JS
gulp.task('js', () =>
  gulp.src(config.jsin)
    .pipe(concat(config.jsoutname))
    .pipe(babili({
      mangle: {
        keepClassName: true
      }
    }))
    // .pipe(terser())
    .pipe(gulp.dest(config.jsout))
);


// minifikacja html
gulp.task('html', function () {
  return gulp.src(config.htmlin)
    .pipe(htmlReaplace({
      'css': config.cssreplaceout,
      'js': config.jsreplaceout
    }))
    .pipe(htmlMin({
      sortAttributes: true,
      sortClassName: true,
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(config.htmlout))
})