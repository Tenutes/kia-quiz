import Vue from 'vue';
import VueMask from 'v-mask';
import VueThreeSixty from 'vue-360';
import 'vue-360/dist/css/style.css';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueMask);
Vue.use(VueThreeSixty);

new Vue({
  render: h => h(App),
}).$mount('#app');
