var gulp = require('gulp')

gulp.task('dist', function(){
  console.log('copying dist');
  var stream = gulp.src(
    '/home/alan/GithubSite/git-site/dist/*'
  ).pipe(gulp.dest('.'))
  return stream;
});

gulp.task('assets', ['dist'], function(){
  console.log('copying assets');
  var stream = gulp.src(
    '/home/alan/GithubSite/git-site/dist/assets/*'
  ).pipe(gulp.dest('./assets'));
  return stream;
});

gulp.task('img', ['assets'], function(){
  console.log('copying assets');
  var stream = gulp.src(
    '/home/alan/GithubSite/git-site/dist/img/*'
  ).pipe(gulp.dest('./assets/img'));
  return stream;
});

gulp.task('fonts', ['dist'], function(){
  console.log('copying fonts');
  var stream = gulp.src(
    '/home/alan/GithubSite/git-site/dist/fonts/*'
  ).pipe(gulp.dest('./fonts'));
  return stream;
});

gulp.task('test', ['dist'], function(){
  console.log('copying fonts');
  var stream = gulp.src(
    '/home/alan/GithubSite/git-site/dist/tests/*'
  ).pipe(gulp.dest('./tests'));
  return stream;
});

// Main Task
gulp.task('default', [
  'dist',
  'assets',
  'img',
  'fonts',
  'test'
], function(){
  console.log('building');
});
