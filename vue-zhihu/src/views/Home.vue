<template>
  <div>

  </div>
</template>

<script>
import api from '@/api/request'
export default {
  data() {
    return {

    }
  },
  created() {
    api.getNews().then((data) => {
      console.log(data);
    })
  }
}
</script>

<style>

</style>
