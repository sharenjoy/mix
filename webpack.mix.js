let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/js/app.js', 'dist/js')
   .sass('src/sass/app.scss', 'dist/css')
   .styles([
        //
   ], 'dist/css/all.css')
   .scripts([
        //
   ], 'dist/js/all.js')
   .setPublicPath('dist');

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
}

mix.browserSync();
