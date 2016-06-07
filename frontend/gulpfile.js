'use strict';
let gulp = require('gulp');
let runSequence = require('run-sequence');

let clientCopyTask = require('./tasks/copy');
let clientBuildTask = require('./tasks/build');
let stylesheetTask = require('./tasks/stylesheet');
let generalCopyTask = require('./tasks/general_copy');
let cleanTask = require('./tasks/clean');
let eslintTask = require('./tasks/eslint');
let singleRun = true;

gulp.task('general-copy-dist', generalCopyTask());
gulp.task('copy', clientCopyTask(singleRun));
gulp.task('copy-dist', clientCopyTask(true));
gulp.task('build', clientBuildTask(singleRun));
gulp.task('build-dist', clientBuildTask(true));
gulp.task('stylesheet', stylesheetTask(singleRun));
gulp.task('stylesheet-dist', stylesheetTask(true));
gulp.task('style', eslintTask());

gulp.task('clean', cleanTask());

gulp.task('serve', function(done) {
  runSequence(
    'clean',
    ['build', 'copy', 'stylesheet'],
    done
  )
});


gulp.task('dist', function(done) {
  runSequence(
    'clean',
    ['build-dist', 'copy-dist', 'stylesheet-dist', 'server-copy-dist', 'general-copy-dist'],
    done
  );
});
