<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
body {
  background: #988185;
  background-image: linear-gradient(40deg, rgba(70, 57, 60, 0.05), rgba(128, 0, 21, 0.05)), linear-gradient(135deg, #796366 0%, #796366 10%, #8c7377 11%, #8c7377 40%, #a38f92 41%, #a38f92 50%, #796366 51%, #796366 60%, #8c7377 61%, #8c7377 90%, #a38f92 91%);
  background-size: 7px 7px, 4px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: montserrat;
}
#app {
  background: white;
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  padding: 20px 30px;
  box-sizing: border-box;
  max-width: 70%;
  margin: 20px;
  text-align: left;
}
</style>
