<template>
  <div>
    <product-list :products="getAllNoteBooks"></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList';
import { mapGetters } from 'vuex';

export default {
  components: {
    ProductList,
  },
  computed: {
    ...mapGetters([
      'getAllNoteBooks',
    ]),
  },
};
</script>

<style>

</style>
