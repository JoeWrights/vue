<template>
  <div>{{html}}</div>
</template>

<script>
// import Bus from '@/common/bus.js'
export default {
  data () {
    return {
      html: '还没点击'
    }
  },
  created () {
    // Bus.$on('getTarget', index => {
    //   this.html = `第${index}个素元被点击了`
    // })
    this.$on('global:getTarget', index => {
      this.html = `第${index}个元素被点击了`
    })
  }
}
</script>

<style>

</style>
