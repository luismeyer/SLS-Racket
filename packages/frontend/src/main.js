// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueCookies from "vue-cookies";

import "boxicons";

import App from "./App";

Vue.use(VueCookies);
Vue.$cookies.config("7d");

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: {
    App
  },
  template: "<App/>"
});