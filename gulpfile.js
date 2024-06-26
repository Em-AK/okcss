const gulp = require("gulp");
const rename = require("gulp-rename");

const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const buildCSS = () =>
  gulp
    .src("./src/ok.css")
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(
      rename({
        basename: "ok",
        extname: ".min.css",
      })
    )
    .pipe(gulp.dest("dist"));

const prepareDeploy = () =>
  gulp
    .src(["./src/ok.css", "index.html", "demo.html"])
    .pipe(gulp.dest("_site"));
  gulp
    .src("./dist/ok.min.css")
    .pipe(gulp.dest("_site/dist"));

exports.default = buildCSS;
exports.deploy = gulp.series(buildCSS, prepareDeploy);
