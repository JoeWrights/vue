const state = {
  items: [],
  checkoutStatus: null
}

//vuex store 一棵树、树根，product.all
const getters = {
  //对state的计算或处理
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({
      id,
      quantity
    }) => {
      const product = rootState.products.all.find(product => product.id == id);
      return {
        id: product.id,
        title: product.title,
        quantity,
		  price: product.price
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
  }
}
const actions = {
  addProductToCart({
    state,
    commit
  }, product) {
    // console.log(product);
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => {
        return item.id === product.id;
      })
      if (!cartItem) {
        commit("pushProductToCart", {
          id: product.id
        })
      } else {
        commit("incrementItemQuantity", cartItem);
      }
      commit("decrementProductInventory", {
        id: product.id
      });
    }
  }
}
const mutations = {
  //改变
  pushProductToCart(state, {
    id
  }) {
    state.items.push({
      id: id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, {
    id
  }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++;
  },

}

export default {
  state,
  getters,
  mutations,
  actions
}
