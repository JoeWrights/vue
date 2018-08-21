<template>
  <div id="app">
    <Menu>
      <btn
        btnColor="btn btn-small btn-info btn-popup"
        :cartIcon="true">
        购物车
      </btn>
    </Menu>
    <transition name="leave">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Btn from '@/components/Btn'

export default {
  name: 'App',
  components: {
    Menu,
    Btn
  }
}
</script>

<style>

</style>
