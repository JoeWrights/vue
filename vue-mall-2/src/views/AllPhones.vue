<template>
  <div>
    <product-list :products="getAllPhones"></product-list>
  </div>
</template>

<script>
import ProductList from '@//components/ProductList';
import { mapGetters } from 'vuex';
export default {
  components: {
    ProductList,
  },
  computed: {
    ...mapGetters([
      'getAllPhones',
    ]),
  },
};
</script>

<style>

</style>
