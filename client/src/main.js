import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider({ url: "http://localhost:3000/graphql" }),
  render: (h) => h(App),
}).$mount("#app");
