import Vue from 'vue'
import router from "./assets/config/RouterConfig.js"
import App from './App.vue'

//elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
  router,
}).$mount('#app')
