import Vue from 'vue';
import App from './index.vue';
import router from '../../router';
import store from '../../store';
import loading from '@/plugins/loading/index.ts';

Vue.use(loading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
