
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * If wants to use ElementUI then uncomment the following section
 */
// import ElementUI from 'element-ui';
// import { Button, Select } from 'element-ui'
// import 'element-ui/lib/theme-default/index.css';
// Vue.use(ElementUI);
// Vue.use(Button);
// Vue.use(Select);
// Vue.component('element-ui-example', require('./components/ElementUIExample.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#vue-app'
});
