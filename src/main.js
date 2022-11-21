import Vue from "vue";
import VueRx from "vue-rx";
import VuejsClipper from "vuejs-clipper/dist/vuejs-clipper.umd.min";
import "vuejs-clipper/dist/vuejs-clipper.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;

Vue.use(VueRx);
Vue.use(VuejsClipper);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
