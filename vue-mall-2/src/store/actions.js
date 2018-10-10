import * as types from './mutation-type';

export default {
  /**
   *
   * @param {Object} context
   * @param {*} product
   */
  // addProduct(context, product) {
  //   console.log(context);  //Object {state, rootState, getters, rootGetters, dispatch, commit}
  //   context.commit(types.ADD_PRODUCT, product);
  // },
  // showCart(context) {
  //   context.commit(types.SHOW_CART);
  // },
  addProduct({ commit }, product) {
    commit(types.ADD_PRODUCT, product);
  },
  showCart({ commit }) {
    commit(types.SHOW_CART);
  },
};
