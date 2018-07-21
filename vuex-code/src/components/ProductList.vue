<template>
  <ul>
    <li v-for="(product,index) in products" :key="index">
        {{product.title}} - {{product.price | currency}}
        <button @click="addProductToCart(product)" :disabled="!product.inventory">Add To Cart</button>
    </li>
  </ul>
</template>

<script>
  import {
    mapState,
    mapActions
  } from "vuex"
  export default {
    computed: mapState({
      //读取状态
      products: state => state.products.all  // state.products.all 状态 进入房间 拿到数据
    }),
    created() {
      this.$store.dispatch("getAllProducts");  //"getAllProducts":action的名字
    },
    methods: mapActions([
        "addProductToCart"
    ])
  }

</script>

<style>


</style>
