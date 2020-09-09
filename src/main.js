import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import i18n from './plugins/i18n';

// Uncomment next line for possibility to manage locale trough route
// Vue.prototype.$i18nRoute = TranslationsHelper.i18nRoute.bind(TranslationsHelper);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount('#app');
