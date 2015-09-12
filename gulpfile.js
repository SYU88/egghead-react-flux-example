var gulp = require('gulp');
var browserify = require('browserify');
//converts JSX to javascript
var reactify = require('reactify');
//must convert a string to a stream to allow browerify to be compatible with gulp
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  //entrypoint into app
    browserify('./src/js/main.js')
    //converts JSX to javascript
      .transform('reactify')
      .bundle()
      //bundle will be named main.js
      .pipe(source('main.js'))
      //bundle will be located at dist/js
      .pipe(gulp.dest('dist/js'));
});

//copy over files like index.html and assets into dist directory
gulp.task('copy',function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
    gulp.src('src/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'));
});

gulp.task('default',['browserify', 'copy'], function() {
  //watch all files immediately, rerun gulp tasks when there is a change
    return gulp.watch('src/**/*.*', ['browserify', 'copy'])
});

