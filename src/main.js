import "core-js";

import Vue from "vue";
import store from "./stores/store";
import router from "@/router";

import App from "./App.vue";

setTimeout(() => {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount("#app");
}, 200);
