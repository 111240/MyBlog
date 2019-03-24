import Vue from 'vue';
import App from './App.vue';
import router from './router';
import iview from 'iview';
import 'iview/dist/styles/iview.css';
import '@/lib/animate.css';
import '@/lib/buttons.css';

Vue.config.productionTip = false;
Vue.use(iview);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
