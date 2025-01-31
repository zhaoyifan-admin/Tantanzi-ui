import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

// import install from "tantanzi-ui";
// import "tantanzi-ui/lib/tantanzi-ui.css"
// Vue.use(install);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')