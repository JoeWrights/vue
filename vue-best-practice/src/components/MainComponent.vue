<template>
  <div>
    Main
    <click-component v-for="i in 5" :key="i" :index="i"/>
    <show-component />
  </div>
</template>

<script>
import ClickComponent from '@/components/ClickComponent'
import ShowComponent from '@/components/ShowComponent'
export default {
  components: {
    ClickComponent,
    ShowComponent
  }
}
</script>

<style>

</style>
