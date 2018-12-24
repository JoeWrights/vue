<template>
  <div id="app">
    <HelloWorld/>
    <test/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';
import Emitter from './mixins/emitter';

export default {
  name: 'app',
  componentName: 'ROOT',
  mixins: [Emitter],
  components: {
    HelloWorld,
    Test,
  },
  created() {
    this.$on('message', params => {
      console.log(params);
      this.broadcast(params.componentName, params.eventName, params.text);
    });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
