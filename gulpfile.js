gulp.task('dosomething for 3 minutes', function (done) {

    setTimeout(function () {
        done(null, 'really done')
    }, 180000)


    
});