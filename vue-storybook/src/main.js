import Vue from 'vue';
import { Button, Input, Table, TableColumn } from 'element-ui';
import App from './App.vue';

Vue.config.productionTip = false;

const components = [Button, Input, Table, TableColumn];
components.forEach(item => Vue.component(item.name, item));

new Vue({
  render: h => h(App),
}).$mount('#app');
