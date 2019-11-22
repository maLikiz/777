var gulp = require('gulp'),
  browserSync = require('browser-sync');
proxy = require('proxy-middleware');
url = require('url');

gulp.task('browser-sync', function() {
  const proxyHost = 'https://admiral777.vip';

  const api = [
    '/core/',
  ];

  const proxyOptionsList = api.map(item => {
    const proxyOptions = url.parse(`${proxyHost}/${item}`);
    proxyOptions.route = item;

    return proxy(proxyOptions);
  });

  browserSync({
    server: {
      baseDir: 'src',
      middleware: proxyOptionsList,
    },
    notify: false,
    ghostMode: {
      scroll: false,
    },
  });
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', browserSync.reload);
  gulp.watch('src/css/**/*.css', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/**/*.php').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel(['browser-sync', 'watch']));
