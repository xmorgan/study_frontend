import gulp from 'gulp';
import postcss from 'gulp-postcss'
import cssnext from 'postcss-cssnext';

gulp.task('build', ['build:css','build:html']);

gulp.task('build:html', () =>
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
);

gulp.task('build:css', () =>
  gulp.src('src/**/*.css')
    .pipe(postcss([cssnext]))
    .pipe(gulp.dest('dist'))
);