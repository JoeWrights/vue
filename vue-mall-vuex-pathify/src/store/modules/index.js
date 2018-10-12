import { state, getters, actions, clone } from './index';

// const mutations = {
//   ADD_PRODUCT(state, product) {
//     state.cartProducts.push(product);
//   },
//   SHOW_CART(state) {
//     state.showPopupCart = !state.showPopupCart;
//   }
// };

const mutations = {
  SET_CARTPRODUCTS(state, product) {
    state.cartProducts.push(product);
  },
  SET_SHOWPOPCART(state) {
    state.showPopupCart = !state.showPopupCart;
  },
};

export default {
  namespaced: true,
  state: clone(state),
  getters,
  mutations,
  actions,
};