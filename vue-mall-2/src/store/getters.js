export default {
  getAllProducts(state) {
    return state.notebooks.concat(state.smartphones);
  },
  getAllNoteBooks(state) {
    return state.notebooks;
  },
  getAllPhones(state) {
    return state.smartphones;
  },
  getProductsInCart(state) {
    return state.cartProducts;
  },
  getPopupCart(state) {
    return state.showPopupCart;
  },
};