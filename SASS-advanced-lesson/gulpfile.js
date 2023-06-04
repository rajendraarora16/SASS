const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
    return src("./SASS_styles/**/*.scss")
        .pipe(sass())
        .pipe(dest("CSS_File"));
}

function watchStyles() {
    return watch(["**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchStyles);
