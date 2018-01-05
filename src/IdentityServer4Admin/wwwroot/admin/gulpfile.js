/**
 * Created by Sam on 29/03/2017.
 */
var gulp = require('gulp'),
    template = require('gulp-template');

gulp.task('docker_env', function(){
    process.env.ApiUrl =  process.env.ApiUrl || "http://localhost:5001";
    process.env.UiUrl =  process.env.UiUrl || "http://localhost:5000";
    process.env.AuthorityUrl =  process.env.AuthorityUrl || "http://ids:5003";
    process.env.AddUserPassword =  process.env.AddUserPassword || false;
    return gulp.src('./env/env.js')
        .pipe(
            template({env: {
                "ApiUrl": process.env.ApiUrl,
                "UiUrl": process.env.UiUrl,
                "AuthorityUrl": process.env.AuthorityUrl,
                "AddUserPassword":  process.env.AddUserPassword
            }})
        )
        .pipe(gulp.dest('./'));
});