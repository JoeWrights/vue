<template>
  <div id="app">
    <el-button :disabled="disabled" type="success" loading>提交</el-button>
    <el-button :disabled="disabled" type="primary" :loading="isLoading" icon="el-icon-edit" @click="doLoading">提交</el-button>
  </div>
</template>

<script>
import ElButton from '@/components/ElButton';
export default {
  name: 'App',
  components: {
    "el-button":ElButton
  },
  data(){
    return {
      disabled:false,
      // type:"success"
      isLoading:false
    }
  },
  mounted(){
    setTimeout(()=>{
      this.disabled=true;
    },2000)
  },
  methods(){
    
  }
}
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
