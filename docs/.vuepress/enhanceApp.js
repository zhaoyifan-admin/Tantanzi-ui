import ElementUI from 'element-ui';
import install from '@zhaoyifannan/tantanzi-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@zhaoyifannan/avue/lib/index.css';
import '@zhaoyifannan/tantanzi-ui/lib/tantanzi-ui.css';
import './styles/index.scss'
export default ({ Vue }) => {
  Vue.use(ElementUI)
  Vue.use(install)
};
