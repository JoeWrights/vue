<template>
  <div>
    <product-list :products="getAllProducts"></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import { mapGetters } from 'vuex'
export default {
  components: {
    ProductList
  },
  computed: {
    ...mapGetters([
      'getAllProducts'
    ]) 
  }
}
</script>

<style>

</style>
