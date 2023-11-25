const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Paths
const paths = {
  scss: {
    src: 'scss/**/*.scss',
    dest: 'css'
  },
  js: {
    bootstrapSrc: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    dest: 'js'
  }
};

// Compile SCSS into CSS
gulp.task('style', function () {
  return gulp.src(paths.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.scss.dest));
});

// Copy Bootstrap JS to the theme's JS directory
gulp.task('bootstrapJs', function () {
  return gulp.src(paths.js.bootstrapSrc)
    .pipe(gulp.dest(paths.js.dest));
});

// Watch for changes
gulp.task('watch', function () {
  gulp.watch(paths.scss.src, gulp.series('style'));
  // Add more watchers if needed
});

// Default task
gulp.task('default', gulp.series('style', 'bootstrapJs', 'watch'));
