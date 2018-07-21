<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length">
      <i>Please Add Some Product To You Cart</i>
    </p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.title}}-{{product.price}} | {{product.quantity}}
      </li>
    </ul>
    <div>Total:{{total | currency}}</div>
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters
  } from "vuex"
  export default {
    computed: {
        // items(){},
        // checkoutStatus(){},  等同于下面的
      ...mapState({     //展开的是里面的对象
        items: state => state.cart.items,
        checkoutStatus: state=>state.cart.checkoutStatus
      }),
      ...mapGetters({
          products: "cartProducts",
          total: "cartTotalPrice"
      })
    }
  }

</script>

<style>


</style>
