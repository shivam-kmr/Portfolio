import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import locale from "view-design/dist/locale/en-US";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = true;

Vue.use(ViewUI, { locale: locale });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
