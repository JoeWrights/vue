import * as types from './mutation-type';

export default {
  [types.ADD_PRODUCT](state, product) {
    state.cartProducts.push(product);
  },
  [types.SHOW_CART](state) {
    state.showPopupCart = !state.showPopupCart;
  },
};
