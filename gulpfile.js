var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    bower = require('gulp-bower'),
    sass = require('gulp-sass');

// $gulp is the default and that starts the server and watch
gulp.task('default', ['watch', 'start-server']);

// $gulp build lets you build the css and html
gulp.task('build', ['css', 'html']);

//nodemon start a little server
gulp.task('start-server', function() {
    nodemon({
        script: 'server.js',
        env: {
            'NODE_ENV': 'development'
        }
    })
});

//grep the main scss file and compile it + minify
gulp.task('css', function() {
    return gulp.src('src/assets/scss/main.scss')
        .pipe(sass())
        // .pipe(cssmin())
        .pipe(gulp.dest('public/css'))
        .pipe(livereload());
});

//grep all the html pages and move them to the public folder
gulp.task('html', function() {
    return gulp.src([
            'src/*.html'
        ])
        .pipe(gulp.dest('public/'))
        .pipe(livereload());
});

gulp.task('vendor', function() {
    return gulp.src([
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'
        ])
        .pipe(gulp.dest('./public/vendor/'));
});


//wacht for changes !!install the livereaload plugin!!
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/assets/scss/**/*.scss', ['css']);
    gulp.watch('src/**/*.html', ['html']);
});
