import Vue from 'vue';
import App from './index.vue';
import router from '../../router';
import store from '../../store';
import { Component } from 'vue-property-decorator'
import loading from '@/plugins/loading/index';
import toast from '@/plugins/toast/index';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
])

Vue.use(loading);
Vue.use(toast);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
