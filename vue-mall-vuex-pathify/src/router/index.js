import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from '@/views/AllProducts';
import AllPhones from '@/views/AllPhones';
import AllNotebooks from '@/views/AllNotebooks';
import Product from '@/views/Product';
import CartCheckout from '@/views/CartCheckout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllProducts',
      component: AllProducts,
    },
    {
      path: '/phones',
      name: 'AllPhones',
      component: AllPhones,
    },
    {
      path: '/notebooks',
      name: 'AllNotebooks',
      component: AllNotebooks,
    },
    {
      path: '/product-detail',
      name: 'Product',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'CartCheckout',
      component: CartCheckout,
    },
  ],
});
